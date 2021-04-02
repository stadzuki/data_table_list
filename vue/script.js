const app = {
    data() {
        return {
            fields: [
                {id: 1, company: 'Alfreds Futterkiste', contact: 'Maria Anders', country: 'Germany'},
                {id: 2, company: 'Centro comercial Moctezuma', contact: 'Francisco Chang', country: 'Mexico'},
                {id: 3, company: 'Ernst Handel', contact: 'Roland Mendel', country: 'Austria'},
                {id: 4, company: 'Island Trading', contact: 'Helen Bennett', country: 'UK'},
                {id: 5, company: 'Laughing Bacchus Winecellars', contact: 'Yoshi Tannamuri', country: 'Canada'},
                {id: 6, company: 'Magazzini Alimentari Riuniti', contact: 'Giovanni Rovelli', country: 'Italy'}
            ],
            outputInfo: {company: '', contact: '', country: ''}
        }
    },
    methods: {
        fieldClick(id) {
            let targetField = this.fields.find(f => f.id == id)
            this.outputInfo = targetField
        }
    }
}

Vue.createApp(app).mount('#app')