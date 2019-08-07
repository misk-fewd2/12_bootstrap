console.log("loaded")

$('#exampleModal2').on('click', () => {
  console.log("model clicked!");

  setTimeout(() => {
    $('#spinner-div')
      .empty()
      .html('<h1>Hello Misk!</h1>')
  }, 1000)

})