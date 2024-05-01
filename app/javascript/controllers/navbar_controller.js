import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["content"]


  closeOnBigScreen(event) {
    if (window.innerWidth >768) {
      this.close()
      console.log('closeOnBigScreen')
    }
  }

  toggle() {
    if (this.contentTarget.classList.contains('hidden')) {
      this.open()
    } else {
      this.close()
    }
  }

  open() {
    this.contentTarget.classList.remove('hidden')
    let main = document.querySelector('main')
    // main.classList.add('blur')
    // document.body.classList.add('overflow-hidden')
    main.classList.add('hidden')
  }

  close() {
    this.contentTarget.classList.add('hidden')
    let main = document.querySelector('main')
    // main.classList.remove('blur')
    // document.body.classList.remove('overflow-hidden')
    main.classList.remove('hidden')
  }
}
