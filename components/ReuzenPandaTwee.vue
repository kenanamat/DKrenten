<!--- Start Reuzenpanda-widget -->
<template>
  <div class="reuzenpanda-widget-from-js-snippet"></div>
  <noscript
    ><a
      href="https://offerte.directsamenstellen.nl/_configure?widget=3c20f21e-da08-4c0e-8361-d5417b47fb52"
      target="_blank"
      style="color: rgba(0, 0, 0, 0)"
      >Offerte Direct Samenstellen.nl 3c20f21e-da08-4c0e-8361-d5417b47fb52</a
    ><a
      href="https://www.reuzenpanda.nl"
      target="_blank"
      style="color: rgba(0, 0, 0, 0)"
      >Reuzenpanda Widget 3c20f21e-da08-4c0e-8361-d5417b47fb52</a
    ></noscript
  >
</template>

<script>
(function (doc, scr, id, start) {
  var ftjs = doc.getElementsByTagName(scr)[0]
  if (doc.getElementById(id)) return
  var js = doc.createElement(scr)
  js.id = id
  js.src = "https://snippetjs.reuzenpanda.nl"
  start && (js.onload = start)
  ftjs.parentNode.insertBefore(js, ftjs)
})(document, "script", "reuzenpanda-widget-from-js-snippet", function () {
  reuzenpandaWidget.load(
    "3c20f21e-da08-4c0e-8361-d5417b47fb52",
    "reuzenpanda-widget-from-js-snippet"
  )
})
</script>
<!--- End Reuzenpanda-widget -->
