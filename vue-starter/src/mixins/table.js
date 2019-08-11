import Vue from 'vue/dist/vue.esm.js'

export default {
  data () {
    return {
      vueFormatters: []
    }
  },

  methods: {
    vueFormatter (obj) {
      const key = `_vue_formatter_${this.vueFormatters.length}`
      this.vueFormatters.push({
        el: `.${key}`,
        name: key,
        ...obj
      })
      return `<div class="${key}"/>`
    },

    vueFormatterPostBody () {
      if (!this.vueFormatters.length) {
        return
      }

      for (let i = this.vueFormatters.length - 1; i >= 0; i--) {
        const formatter = this.vueFormatters[i]

        if (document.getElementsByClassName(formatter.name)) {
          new Vue(formatter)
          this.vueFormatters.splice(i, 1)
        }
      }
    }
  }
}
