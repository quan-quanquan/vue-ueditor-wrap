export default function installImgDragPlugin() {
  const utils = UE.utils
  const domUtils = UE.dom.domUtils

  UE.plugins["imgdrag"] = function() {
    const me = this
    me.addListener("contentchange", function() {
      const me = this
      utils.each(domUtils.getElementsByTagName(me.document, "img"), function(img) {
        console.log(img)
      })
    })
  }
}