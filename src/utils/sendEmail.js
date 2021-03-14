const trick = document.querySelector('#trick')

function handleSubmit(ev){
  ev.preventDefault()
  const form = new FormData(this)
  trick.setAttribute('href', `mailto:nilsonkr444@gmail.com?subject=${form.get('email')}&body=${'Lets Create Something Together'}`)
  trick.click()

}

export default handleSubmit

