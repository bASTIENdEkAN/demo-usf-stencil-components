import tail from 'tail.select'; // 54 kb

tail.strings.register("nl", {
	all: "Allemaal",
	none: "Nee",
	empty: "Geen optie beschikbaar",
	emptySearch: "Geen opties gevonden",
	limit: "Geen andere optie selecteerbaar",
	placeholder: "Kies een optie ...",
	placeholderMulti: "Kies tot: optie (s) beperken ...",
	search: "Zoeken...",
	disabled: "Dit veld is uitgeschakeld"
});
 

const tailselects = document.querySelectorAll('.tailselect');

tailselects.forEach(tailselect =>{
	const withSearch = tailselect.classList.contains('with-search')
	// console.log('withSearch:', withSearch)
	// console.log('placeholder:', placeholder)

	const select = tail(tailselect, {
		search: withSearch,
		hideSelected: false,
		hideDisabled: true,
		placeholder: false,
		locale: "nl", 
	});
	
	// select
}) 