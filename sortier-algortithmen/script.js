document.addEventListener('alpine:init', () => {
    Alpine.data('selectionSort', () => ({
        initial_array: [0],
        step_count: 0,
        current_pos: 0,
        toggle: true,
        smallest: -1, 
        get finished() { return this.current_pos >= (this.initial_array.length - 1) },
        step() {
            if (this.toggle) {
                let smallest = this.current_pos
                for (let i = this.current_pos + 1; i < this.initial_array.length; i++) {
                    if (this.initial_array[i] < this.initial_array[smallest]) { smallest = i }
                    this.step_count++
                }
                this.smallest = smallest
                this.toggle = false
            } else {
                let temp = this.initial_array[this.smallest]
                this.initial_array[this.smallest] = this.initial_array[this.current_pos]
                this.initial_array[this.current_pos] = temp
                
                this.smallest = this.current_pos
                this.current_pos++
                this.toggle = true
            }
        },
        reset() {
            this.step_count = 0
            this.current_pos = 0
            this.initial_array = []
            this.toggle = true
            this.smallest = -1
        },
        receive(list) {
            let overwrite = true
            if (!this.finished) {
                overwrite = confirm('Daten in Selection-Sort für neues Array zurücksetzen?')
            }

            if (overwrite) {
                this.reset()
                this.initial_array = list
            }
        }
    }))

    Alpine.data('input', () => ({
        input_text: '',
        invalid_flag: false,
        send() {
            let initial_array = this.input_text.split(',').map(Number)
            this.$dispatch('newarray', initial_array)
        }
    }))
})
