class Cal {
    constructor(displayEl) {
        this.displayEl = displayEl
        this.operatorCheck = true
        this.equalsCh = false
        this.clear()

    }

    compute() {
        if(this.operatorCheck) return
        this.displayCon = eval(this.displayCon
            .replace('\u00d7', '*')
            .replace('\u00f7', '/')
            )
            this.equalsCh = true
    }

    


    appendNum(number) {
        if(this.equalsCh) {
            this.displayCon = number
            this.equalsCh = false
        } else {
            this.displayCon += number
        }
        this.operatorCheck = false
    }
    appendOper(operator) {
        if(this.operatorCheck) return false
        if(this.equalsCh) this.equalsCh = false
        this.displayCon += operator
        return this.operatorCheck = true

    }

    updateDisp() {
        this.displayEl.value = this.displayCon
    }
    clear() {
        this.displayCon = ''
        this.displayEl.value = 0
        this.operatorCheck = true
    }
}


const buttons = document.querySelectorAll('button')
const displayEl = document.querySelector('input')
const cal = new Cal(displayEl)

buttons.forEach(button => {
    button.addEventListener('click', () => {
        switch (button.dataset.type) {
            case 'operator':
                if(cal.appendOper(button.innerText)) {
                    cal.updateDisp()
                }
                equalsCh = true
                break
            case 'ac':
                cal.clear()
                break
            case 'equals':
                cal.compute()
                cal.updateDisp()
                break
            default:
                cal.appendNum(button.innerText)
                cal.updateDisp()
                break
        }
    })
})