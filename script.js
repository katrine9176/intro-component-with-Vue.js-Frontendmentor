const app = Vue.createApp({
	data() {
		return {
			errorNameClass: 'hide',
			errorLastNameClass: 'hide',
			errorEmailClass: 'hide',
			errorPasswordClass: 'hide',
			name: '',
			lastName: '',
			email: '',
			password: '',
			re: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
		}
	},
	methods: {
		setNameValue(e) {
			this.name = e.target.value
		},
		setLastNameValue(e) {
			this.lastName = e.target.value
		},
		setEmailValue(e) {
			this.email = e.target.value
		},
		setPasswordValue(e) {
			this.password = e.target.value
		},
		checkValues(e) {
			if (this.name === '') this.errorNameClass = ''
			if (this.lastName === '') this.errorLastNameClass = ''
			if (!this.re.test(this.email)) this.errorEmailClass = ''
			if (this.name !== '') this.errorNameClass = 'hide'
			if (this.lastName !== '') this.errorLastNameClass = 'hide'
			if (this.password.length < 8) this.errorPasswordClass = ''
			if (this.re.test(this.email)) this.errorEmailClass = 'hide'
			if (this.password.length >= 8) this.errorPasswordClass = 'hide'
			e.preventDefault()
		},
	},
})

app.mount('#app')
