// Preprocess strings from ISO to Devanāgarī.
function preprocessSanscript(script,x) {
  /* generic routines to remove spaces */
  var res = x.split("##"),
  out = [];
  res.forEach(function(item, index) {
    if (item.startsWith("<")) {
      out.push(item);
    } else {
      var trans = item.replace(/ ’/g,"'")
      .replace(/’/g,"'")
      .replace(/aï/g,"a####i")
      .replace(/aü/g,"a####u")
      .replace(/([rnmdg]) ([gṅjñḍṇdnbmhyvrlaāiīuūeēoō])/g,"$1$2")
      .replace(/(ñ) (ch)/g,"$1$2")
      .replace(/([kcṭtpśsṣ]) ([kcṭtpśsṣ])/g,"$1$2")
      .replace(/([vy]) ([aāiīuūēeōo])/g,"$1$2")
      .replace(/ \|\|/g," ॥")
      .replace(/ \|/g," ।");
      trans = removeAccents(trans);
      if (script == "Knda") {
        trans = trans.replace(/([aāiīuūr̥eēoō])([ñṅnm])([kgcjṭḍtdpbyvrlśṣs])/g,"$1ṁ$3")
        .replace(/([aāiīuūr̥eēoō])([ṇ])([ṭḍ])/g,"$1ṁ$3");
      }
      if (script == "Telu") {
        trans = trans.replace(/([aāiīuūr̥eēoō])([ṅñṇnm])([kgcjṭḍtdpbyvrlśṣs])/g,"$1ṁ$3")
        .replace(/([kgcjṭḍtdpbyvrlśṣs])([ḷ])/g,"$1l")
        .replace(/([ṇ])([ṇ])/g,"$1n");
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
  return out;
};

// walk tree to convert text
// actually update script lang
