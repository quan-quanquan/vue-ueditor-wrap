
export default function installImgDragPlugin() {
  const utils = UE.utils
  const domUtils = UE.dom.domUtils

  UE.plugins["imgdrag"] = function() {
    const me = this
    function mouseOverEvent(evt) {
      me.body.style.cursor = "pointer"
    }
    function mouseOutEvent(evt) {
      me.body.style.cursor = "text"
    }
    function dragStartEvent(evt) {
      // console.log(evt)
    }
    function dragEvent(evt) {
      // console.log(evt)
    }
    function dragEndEvent(evt) {
      console.log(evt)
    } 
    me.addListener("contentchange", function() {
      const me = this
      utils.each(domUtils.getElementsByTagName(me.document, "img"), function(img) {
        // domUtils.on(img, "mouseover", mouseOverEvent)
        // domUtils.on(img, "mouseout", mouseOutEvent)
        // domUtils.on(img, "dragstart", dragStartEvent)
        // domUtils.on(img, "drag", dragEvent)
        // domUtils.on(img, "dragend", dragEndEvent)
      })
    })
  }
}