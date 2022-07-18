<?php

use Jenssegers\Blade\Blade;
use MallardDuck\HtmlFormatter\Formatter;
require __DIR__ . '/vendor/autoload.php';


// Log tools:
// -> Log function
function _log($str){
    echo $str."\n";
}
// -> Display log in some color
// https://stackoverflow.com/questions/13101302/php-log-file-color
$colorFormats = array(
    // styles
    // italic and blink may not work depending of your terminal
    'bold' => "\033[1m%s\033[0m",
    'dark' => "\033[2m%s\033[0m",
    'italic' => "\033[3m%s\033[0m",
    'underline' => "\033[4m%s\033[0m",
    'blink' => "\033[5m%s\033[0m",
    'reverse' => "\033[7m%s\033[0m",
    'concealed' => "\033[8m%s\033[0m",
    // foreground colors
    'black' => "\033[30m%s\033[0m",
    'red' => "\033[31m%s\033[0m",
    'green' => "\033[32m%s\033[0m",
    'yellow' => "\033[33m%s\033[0m",
    'blue' => "\033[34m%s\033[0m",
    'magenta' => "\033[35m%s\033[0m",
    'cyan' => "\033[36m%s\033[0m",
    'white' => "\033[37m%s\033[0m",
    // background colors
    'bg_black' => "\033[40m%s\033[0m",
    'bg_red' => "\033[41m%s\033[0m",
    'bg_green' => "\033[42m%s\033[0m",
    'bg_yellow' => "\033[43m%s\033[0m",
    'bg_blue' => "\033[44m%s\033[0m",
    'bg_magenta' => "\033[45m%s\033[0m",
    'bg_cyan' => "\033[46m%s\033[0m",
    'bg_white' => "\033[47m%s\033[0m",
);
// -> Fine the right error line
// https://stackoverflow.com/questions/9721952/search-string-and-return-line-php
function getLineWithString($fileName, $str, $return) {
    $lines = file($fileName);
    foreach ($lines as $lineNumber => $line) {
        if (strpos($line, $str) !== false) {
            if($return == 'number'){
                return $lineNumber;
            }else{
                return $line;
            }
        }
    }
    return -1;
}

// Script


$waitMsg = sprintf($colorFormats['bg_blue'], ' PHP WAIT ').sprintf($colorFormats['blue'], ' Compiling templates...');
_log('');
_log($waitMsg);
_log('');

if(!is_dir('tmp')) mkdir('tmp');
if(!is_dir('tmp/cache')) mkdir('tmp/cache');
if(!is_dir('output')) mkdir('output');
if(!is_dir('output/html')) mkdir('output/html');

$blade = new Blade('resources/views', 'tmp/cache');

$errorCount = 0;

foreach(glob("resources/views/pages/{,*/,*/*/,*/*/*/}*.blade.php", GLOB_BRACE) as $page){
    $page = str_replace('resources/views/','',$page);
    $page = str_replace('.blade.php','',$page);
    $page = str_replace('/','.',$page);
    $pageName = str_replace('pages.','',$page);
    $pageName = str_replace('.','/',$pageName);

    _log('-> '.ucfirst($pageName));

    try{
        $html = $blade->make($page)->render();
        
        // https://packagist.org/packages/mallardduck/html-formatter
        $formatter = new Formatter();
        $htmlFormatted = $formatter->beautify($html);

        if(is_file('output/html/'.$pageName.'.html')) unlink('output/html/'.$pageName.'.html');
        
        $completePath = '';
        foreach(explode('/','output/html/'.$pageName) as $slug){
            if(!empty($completePath)&&!is_dir($completePath)){
                mkdir($completePath);
            }

            $completePath .= $slug.'/';
        }

        $outputPath = 'output/html/'.$pageName.'.html';
        file_put_contents($outputPath,(string)$htmlFormatted);  

        // Error log
        if(str_contains($htmlFormatted, 'Undefined variable')){
            _log('');
            $errorCount = $errorCount + 1;
            $errorLabel = sprintf($colorFormats['bg_red'], ' PHP ERROR ');
            $errorMsg = sprintf($colorFormats['red'], ' '.$pageName.'.html contains undefined variable');
            _log($errorLabel.$errorMsg);

            $errorMsg2Line = getLineWithString($outputPath, 'Undefined variable','number');
            $errorMsg2 = sprintf($colorFormats['red'], '-> Find the error at the line '.$errorMsg2Line.' of the file "'.$outputPath.'"');
            _log($errorMsg2);
            
            $errorMsg3Line = getLineWithString($outputPath, 'Undefined variable','string');
            $errorMsg3 = sprintf($colorFormats['red'], '-> '.trim($errorMsg3Line));
            _log($errorMsg3);
        }else if(str_contains($htmlFormatted, 'Notice:')){
            _log('');
            $errorCount = $errorCount + 1;
            $errorLabel = sprintf($colorFormats['bg_yellow'], ' PHP WARNING ');
            $errorMsg = sprintf($colorFormats['yellow'], ' '.$pageName.'.html contains some wierde think');
            _log($errorLabel.$errorMsg);
        }
        
    } catch(\Exception $e){
        // Error log
        $errorCount = $errorCount + 1;
        $errorLabel = sprintf($colorFormats['bg_red'], ' PHP ERROR ');
        $erroMsg = sprintf($colorFormats['red'], " ".$e->getMessage());
        $errorMsg = sprintf($colorFormats['red'], " ".$e);
        _log($errorLabel.$errorMsg);
    }
}

// Success log
if($errorCount === 0){
    _log('');
    $success = sprintf($colorFormats['bg_green'], ' PHP DONE ');
    $msg = sprintf($colorFormats['green'], ' Compiled successfully');
    _log($success.$msg);
}

_log('');