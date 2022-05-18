<template>
    <div class="container">
        <label for="skills">Type</label>
        <input @keyup="addSkill" v-model="tempSkills" type="text" placeholder="Your Skills">
        <div style="color:red;" v-if="error"> Skills already exist </div>
            <ul>
                <li @click="removeSkill(skill)" v-for="skill in skills" :key="skill"> {{ skill }} </li>
            </ul>
    </div>

</template>

<script>
    export default {
        name: 'Input',
        data () {
            return {
                tempSkills: '',
                skills: [],
                error: false
            }
        },
        methods: {
            addSkill(e) {
                this.error = false
                if(e.key === 'Enter' && this.tempSkills) {
                    if(!this.skills.includes(this.tempSkills))
                    {
                        this.skills.push(this.tempSkills)
                    } else {
                        this.error = true
                    }
                    this.tempSkills = ''
                }
            },j
            removeSkill(skill) {
                // console.log(skill)
                this.skills = this.skills.filter((item) => {
                    return skill !== item
                })
            }
        }
    }
</script>

<style scoped>
    .container{
        margin: 0 auto;
    }
    input {
        margin: 0 10px;
    }
    ul {
        list-style-type: none;
    }
    ul li {
        font-size: 20px;
        cursor: pointer;
        font-weight: bold;
        padding: 10px 20px;
        background: gray;
        color: white;
        display: inline-block;
        border-radius: 20px;
        margin: 40px 4px;
    }
</style>