<template>
    <div class="container">
        <div class="row" >
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                <form >
                    <app-full-name v-model="fullName">
                    </app-full-name>
                    <label for="email"  class="col-lg-12">
                        <span>email</span>
                        <input  name="email" type="text" v-model="email" class="form-control" />
                    </label>
                    <label for="password"  class="col-lg-12">
                        <span>Password</span>
                        <input  name="password" type="password" v-model="password" class="form-control" />
                    </label>
                    <label for="storeData"  class="col-lg-12">
                        <span>Store data</span>
                        <input name="storeData" type="checkbox" v-model="storeData" />
                    </label>
                    <button @click="submitForm" class="btn btn-primary" >Submmit Form</button>
                </form>


                <!-- Exercise 1 -->
                <!-- Create a Signup Form where you retrieve the following Information -->
                <!-- Full Name (First Name + Last Name) -->
                <!-- Mail -->
                <!-- Password -->
                <!-- Store Data? Yes/No -->

                <!-- Exercise 2 -->
                <!-- Only display the Form if it has NOT been submitted -->
                <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                <!-- Exercise 3 -->
                <!-- Edit the Example from above and create a custom "Full Name" Control -->
                <!-- which still holds the First Name and Last Name Input Field -->
            </div>
            <hr>
        </div>
        <div  class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ fullName }} </p>
                        <p>Mail: {{email}} </p>
                        <p>Password: {{password}} </p>
                        <p>Store in Database?: {{storeData}} </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FullName from './components/FullName.vue';
    export default {
        data: function(){
            return{
                fullName:'',
                email:'',
                password:'',
                storeData:false,
                isSubmited:false
            }
        },
        methods:{
            submitForm(){
                this.isSubmited = true;
            }
        },
        components:{
            appFullName: FullName
        }
    }
</script>

<style>
input[type="checkbox"]{
    display:block;
}
</style>
