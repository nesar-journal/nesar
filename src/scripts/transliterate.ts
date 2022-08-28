var userScript = localStorage.getItem("userScript"),
    sanscriptNames = {
	"Deva":"devanagari",
	"Latn":"iso",
	"Knda":"kannada",
	"Telu":"telugu",
	"Beng":"bengali",
	"Mlym":"malayalam",
	"Bali":"balinese",
	"Gujr":"gujarati",
	"Gran":"grantha"
    };

function transliterateDocument() {
    $("[lang^='pra'], [lang^='san'], [lang^='kan'], [lang^='tel'] [lang^='pka']").each(function(){
	translit($(this));
    });
}

function setScriptMenu() {
    if (userScript != null) {
	var scriptElement = $("#script-"+userScript);
	scriptElement.addClass("active");
    } else { // default to Devanagari
	$("#script-Deva").addClass("active");
	userScript = "Deva";
	localStorage.setItem("userScript","Deva");d
    }
};

function addHiddenElements() {
    $(document).find(".translit").each(function() {
	var translit = $(this),
	    copy = translit.clone();
	copy.removeClass().addClass("d-none copy");
	translit.append(copy);
    });
}

// when a link from the script menu is clicked,
// indicScript is called, with the script as a parameter.
function indicScript(element) {
    var s = element.id.replace("script-","");
    $(".scriptSelector").removeClass("active");
    localStorage.setItem("userScript",s);
    userScript = s;
    $(element).addClass("active");
    transliterateDocument();
}

// the transliteration function takes the name of the script
// (in ISO codes) as a parameter, determines the language of
// the element based on the @lang attribute, and

function translit(element) {
    // All text children of the passed element  are wrapped
    // in a span and transliterated into the user-selected script.
    // The original content of each text element is saved as
    // data-original.
    var langAttr = element.attr("lang"),
	language, script;
    if (typeof langAttr !== "undefined" && langAttr !== false) {
	var n = langAttr.lastIndexOf("-");
	language = langAttr.substring(0,n);
	script = langAttr.substring(n+1);
    } else {
	// Default to English
	language = "eng";
	script = "Latn";
    }
    // If there are not already translitWrapper elements, make them:
    if (element.find(".translitWrapper").length == 0) {
	makeWrappers(element,script,language);
    }
    // the changeWrappers function actually performs the transliteration
    // based on the data in the element wrapper.
    changeWrappers(element,userScript,language);
    punctuate(element,userScript,language);
}

// Preprocess strings from ISO to Devanāgarī.
function preprocessSanscript(language,script,x) {
    var res = x.split("##"),
	out = [];
    res.forEach(function(item, index) {
	if (item.startsWith("<")) {
	    out.push(item);
	} else {
	    // generic preprocessing steps
	    var trans = item;
	    trans = trans.replace(/ ’/g,"'")
		.replace(/’/g,"'")
		.replace(/aï/g,"a####i")
		.replace(/aü/g,"a####u")
		.replace(/([rnmdg]) ([gṅjñḍṇdnbmhyvrlaāiīuūeēoō])/g,"$1$2")
		.replace(/([kcṭtpśsṣ]) ([kcṭtpśsṣ])/g,"$1$2")
		.replace(/([vy]) ([aāiīuūēeōo])/g,"$1$2")
		.replace(/ \|\|/g," ॥")
		.replace(/ \|/g," ।");
	    trans = removeAccents(trans);
	    // language-specific preprocessing steps
	    if (language == "pra") {
		trans = trans.replace(/([ṅñṇnm])([kgcjṭḍtdpb])/g,"ṁ$2"); // this is only used in Prakrit
	    }
	    if (script == "Knda") {
		trans = trans.replace(/([aāiīuūr̥eēoō])([ṅñṇnm])([kgcjṭḍtdpbyvrlśṣs])/g,"$1ṁ$3");
	    }
	    if (script == "Telu") {
		trans = trans.replace(/([aāiīuūr̥eēoō])([ṅñṇnm])([kgcjṭḍtdpbyvrlśṣs])/g,"$1ṁ$3")
	            .replace(/([kgcjṭḍtdpbyvrlśṣs])([ḷ])/g,"$1l")
	            .replace(/([ṇ])([ṇ])/g,"$1n");
	    }
	    if (script == "Deva") {
		trans = trans.replace(/e/g,"ē")
		    .replace(/o/g,"ō")
		    .replace(/ĩ/g,"iँ");
	    }
	    if (script == "Latn") {
		if ($(this).parent().hasClass("l")) {
		    x = $(this).text().replace(/\u007c\u007c/g,'~')
			.replace(/\u007c/g,'~')
			.replace(/\|/g,'~');
		} else {
		    x = $(this).text().replace(/\s+\u007c\u007c/g,'. ~')
			.replace(/\|\|/g,'. ~')
			.replace(/\s+\u007c/g,'.')
			.replace(/\|/g,'.');
		}
	    }
	    out.push(trans);
	}
    });
    out = out.join("##");
    console.log(out);
    return out;
};

var getTextNodesIn = function(el) {
    return $(el).find(":not(iframe)").addBack().contents().filter(function() {
        return this.nodeType == 3;
    });
};

function makeWrappers(element,script,language) {
    getTextNodesIn(element).each(function() {
	var parentLang = $(this).parent().attr("lang");
	if (typeof parentLang !== typeof undefined && parentLang !== false && parentLang == "eng") {
	} else {
	    var original = $(this).text();
	    $(this).wrap(function() {
		return "<span class='translitWrapper' data-script='"+script+"' data-language='"+language+"' data-original='"+original+"'></span>";
	    });
	}
    });
}
function changeWrappers(element,userScript,language) {
    element.find(".translitWrapper").each(function() {
	var original = $(this).attr("data-original"),
	    language = $(this).attr("data-language"),
	    preprocessed =  preprocessSanscript(language,userScript,original.toLowerCase()),
	    transliterated = Sanscript.t(preprocessed,"iso",sanscriptNames[userScript]);
	$(this).attr("data-script",userScript);
	$(this).attr("data-language",language);
	if ($(this).attr("data-Script") != "Latn") {
	    $(this).text(transliterated);
	} else {
	    $(this).text(original);
	}
    });
}

function removeAccents(string) {
    var output = string.replace(/á/g,"a")
            .replace(/à/g,"a")
            .replace(/ā`/g,"ā")
            .replace(/ā́/g,"ā")
	    .replace(/ā́/g,"ā")
	    .replace(/ḗ/g,"ē")
	    .replace(/ē`/g,"ē")
	    .replace(/ō`/g,"ō")
	    .replace(/ō´/g,"ō")
            .replace(/ṓ/g,"ō")
            .replace(/ṑ/g,"ō")
	    .replace(/í/g,"i")
	    .replace(/ì/g,"i")
            .replace(/ī́/g,"ī")
            .replace(/ī`/g,"ī")
	    .replace(/ú/g,"u")
	    .replace(/ù/g,"u")
            .replace(/ū`/g,"ū")
            .replace(/ū́/g,"ū")
            .replace(/ū´/g,"ū")
	    .replace(/ŕ̥/g,"r̥");
    return output;
};

function punctuate(element,script,language) {
    element.find(".punctuation").remove();
    var punct = $("<span class='punctuation' data-script='"+script+"'></span>"),
	dotSentPunct = ["Latn", "Knda", "Telu", "Mlym", "Gran"],
	lastChild = element.children().last(),
	lastChildText = lastChild.text();
    if (element.hasClass("sentence")) {
	if (lastChildText.match("—.*$")) {
	} else {
	    // In case there is still punctuation in the source text
	    if (lastChildText.endsWith(".")) {
		lastChild.text(function(i,t) {
		    return t.slice(0,-1);
		});
	    }
	    if (dotSentPunct.includes(script)) {
		punct.text(". ");
	    } else {
		punct.text("\xa0। ");
	    }
	}
    };
    if (element.prop("tagName") == "LI" && element.hasClass("list-inline-item")) {
	if (element.next().prop("tagName") == "LI") {
	    if (dotSentPunct.includes(script)) {
		punct.text(",");
	    } else {
		punct.text("\xa0। ");
	    }
	} else {
	    if (dotSentPunct.includes(script)) {
		punct.text(".");
	    } else {
		punct.text("\xa0॥ ");
	    }
	}
    }
    if (element.hasClass("abbreviation")) {
	if (dotSentPunct.includes(script)) {
	    punct.text(".");
	} else {
	    punct.text("॰");
	}
    }
    if (element.hasClass("l")) {
	var parent = element.parent(".lg"),
	    padas = parent.find(".l").length;
	if (dotSentPunct.includes(script)) {
	    punct.text(" ~");
	} else {
	    punct.text("\xa0।");
	}
	if (element.prevAll(".l").length % 2 != 0) { // padas 2, 4, 6 etc.
	    if (dotSentPunct.includes(script)) {
		punct.text(" ~~");
	    } else {
		punct.text("\xa0॥");
	    }
	}
    }
    if (punct.text().length > 0) {
	element.append(punct);
    }
}

function smoothScroll() {
    $("a[href^='#'], a[href^='index.html#']").on('click',function(e) {
	e.preventDefault();
	var path = window.location.pathname,
	    page = path.split("/").pop(),
	    offset = 0,
	    target = this.hash,
	    navbarheight = $('.navbar').height() + 30;
	if ($(this).attr("href").startsWith(page)) {
	    if ($(this).data('offset') != undefined) offset = $(this).data('offset');
	    $('html, body').stop().animate({
		'scrollTop': $(target).offset().top - offset - navbarheight
	    }, 500, 'swing', function() {
		//window.location.hash = target;
	    });
	} else {
	    if ($(this).attr("href") != "#") {
		window.location.href = $(this).attr("href");
	    }
	}
    });
}
