// alert('work!')

// OnDragStart
function onDragStart(event) {
    // console.log('onDragStart fired!!!')

    event
        .dataTransfer
        .setData('text/plain', event.target.id)

    event
        .currentTarget
        .style
        .backgroundColor = 'yellow'
}

// OnDragOver
function onDragOver(event) {
    event.preventDefault()
    // console.log('onDragOver fired!!!', event)
}

// OnDrop
function onDrop(event) {
    // console.log('onDrop fired!!!', event)
    // Get element id
    const id = event
        .dataTransfer
        .getData('text')

    // console.log('check onDrop id...', id)
    // Get draggable element
    var draggableElem = document.getElementById(id)
    // console.log('check draggableElem...', draggableElem)

    // Dropzone
    var dropzone = event.target
    // console.log('check dropzone...', dropzone)

    // Append draggable element in to dropzone
    dropzone.appendChild(draggableElem)

    // Reset the data transfer object
    event
        .dataTransfer
        .clearData()
}

