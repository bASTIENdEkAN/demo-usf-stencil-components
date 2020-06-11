<?php

use Jenssegers\Blade\Blade;use Wa72\HtmlPrettymin\PrettyMin;
require __DIR__ . '/vendor/autoload.php';

function _log($str){
    echo $str."\n";
}

_log('');
_log( "Compiling templates...");

// Script

if(!is_dir('tmp')) mkdir('tmp');
if(!is_dir('tmp/cache')) mkdir('tmp/cache');
if(!is_dir('output')) mkdir('output');
if(!is_dir('output/html')) mkdir('output/html');

$blade = new Blade('resources/views', 'tmp/cache');

foreach(glob("resources/views/pages/{,*/,*/*/,*/*/*/}*.blade.php", GLOB_BRACE) as $page){
    $page = str_replace('resources/views/','',$page);
    $page = str_replace('.blade.php','',$page);
    $page = str_replace('/','.',$page);
    $pageName = str_replace('pages.','',$page);
    $pageName = str_replace('.','/',$pageName);

    _log('-> '.ucfirst($pageName));

    try{
        $html = $blade->make($page)->render();
        
        $config = array(
                'indent'         => true,
                'output-xhtml'   => true,
                'wrap'           => 200);

        $tidy = new tidy;
        $tidy->parseString($html, $config, 'utf8');
        $tidy->cleanRepair();

        if(is_file('output/html/'.$pageName.'.html')) unlink('output/html/'.$pageName.'.html');
        
        $completePath = '';
        foreach(explode('/','output/html/'.$pageName) as $slug){
            if(!empty($completePath)&&!is_dir($completePath)){
                mkdir($completePath);
            }

            $completePath .= $slug.'/';
        }

        file_put_contents('output/html/'.$pageName.'.html',(string)$tidy);  
    } catch(\Exception $e){
        _log("-> ERROR: ".$e->getMessage());
    }
}

_log('');