<template>
    <div>
        <label for="firstName" class="col-lg-12">
            <span>First Name</span>
            <input :value="firstName" @change="setfirstName($event.target.value)" type="text"  class="form-control" />            
        </label>
        <label for="lastName"  class="col-lg-12">
            <span>Last Name</span>
            <input :value="lastName" @change="setLastName($event.target.value)" type="text"  class="form-control" />
        </label>
    </div>
</template>
<script>
export default {
    data: function(){
        return {
            firstName:'',
            lastName:''
        }
    },
    methods:{
        emitModel(){
            this.$emit('input',this.firstName + ' ' + this.lastName);
        },
        setfirstName(firstName){ 
            this.firstName=firstName;
            this.emitModel();
        },
        setLastName(lastName){ 
            this.lastName= lastName;
            this.emitModel();
        },
    }
}
</script>

