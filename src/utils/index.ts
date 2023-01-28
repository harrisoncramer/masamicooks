import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import type { Document } from "@contentful/rich-text-types";

export function richTextParser (richTextObject: Document) {
  const string = documentToHtmlString(richTextObject)
  let output = ""
   for (var i=0; i<string.length; i++) {
      const charCode = string.charCodeAt(i)
      if (charCode <= 127) {
        output += string.charAt(i);
        } else {
          if([8220,8221].includes(charCode)) output += '"'
          if(8217 === charCode) output += "'"
        }
  }
  return output
}
