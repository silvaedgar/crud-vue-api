<template>
<div class="container mt-4">
    <div class="row">
        <div class="col-md-12">
            <form v-on:submit.prevent="UpdateRecord" autocomplete="off" class="form-horizontal">
                <div class="card mx-auto">
                    <div class="card-header card-header-primary">
                        <h4 class="card-title">Editando Tarea</h4>
                    </div>
                    <div class="card-body" >

                        <div class="row">
                            <input type="hidden" value ="" name = "id">
                            <label class="col-sm-2 col-form-label">Responsable</label>
                            <div class="col-sm-9 mb-3">
                                <div class="form-group">
                                    <input class="form-control" name="nombre" type="text" v-model="task.name" 
                                            placeholder="Responsable" required="true"/>
                                    <span class="text-danger" v-if="errors.name"> {{ errors.name[0] }}</span>
                                </div>
                            </div>
                            <label class="col-sm-2 col-form-label">Descripcion</label>
                            <div class="col-sm-10">
                                <div class="form-group mb-3">
                                    <input class="form-control" name="correo" type="text"
                                        placeholder="Descripción de la Tarea" required="true" 
                                        v-model="task.description"/>
                                    <span class="text-danger" v-if="errors.description"> {{ errors.description[0] }}</span>
                                </div>
                            </div>
                            <label class="col-sm-2 col-form-label">Estado</label>
                            <div class="col-sm-8">
                                <div class="form-group">
                                    <select class="form-control" name="status" v-model="task.status">
                                        <option value=""> Seleccione un Status ... </option>
                                        <option value="Pendiente"> Pendiente </option>
                                        <option value="En Proceso"> En Proceso </option>
                                        <option value="Ejecutada"> Ejecutada </option>
                                    </select>
                                    <span class="text-danger" v-if="errors.status"> {{ errors.status[0] }}</span>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="card-footer ml-auto mr-auto">
                        <button type="submit" class="btn btn-primary ml-2"> Grabar</button> &nbsp;
                        <router-link :to="{name:'List'}" class="mr-3 btn btn-warning"> Cancelar </router-link>
                    </div>
                </div>
            </form>
        </div> 
    </div>  
</div>
</template>
<script>
import axios from 'axios';

export default {
    data() {
        return {
            task : {
                name : '',
                description : '',
                status : ''
            },
            errors : []
        }
    },
    created() {
        this.GetTask(this.$route.params.id)
    },
    methods: {
        async GetTask(id) {
            let res = await axios.get('http://localhost/laravel-crud-api/public/api/tasks/'+id);
            this.task = res.data;
        },
        async UpdateRecord() {
            try {
                await axios.put('http://localhost/laravel-crud-api/public/api/tasks/'+this.task.id,this.task);
                window.location.href="/list"
            } catch (error) {
                this.errors = (error.response.data.errors ? error.response.data.errors :{})                
            }
        }
    }
}
</script>