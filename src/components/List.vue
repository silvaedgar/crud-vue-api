<template>
<div class="container">
    <div class="row">
      <div class="col-sm-12 mt-4">
        <div class="card">
            <div class="card-header card-header-primary">
              <div class="row">
                <div class="col-sm-6 col-md-9 flex-column justify-content-center ">
                    <h4 class="card-title">Lista de Tareas</h4>
                </div>
                <div class="col-sm-3 float-end">
                    <a href="create"> <button class="btn btn-primary float-end" > Crear Tarea
                        <i class="fa fa-plus" aria-hidden="true"></i>
                    </button> </a>
                </div>
              </div>
            </div>
            <div class="card-body">
            <div class="table-responsive">
              <table class="table table-hover table-striped" style="width: 100%">
                <thead class=" text-primary">
                    <th style="width:5%">Item</th>
                    <th>Responsable</th>
                    <th>Descripcion</th>
                    <th>Status</th>
                    <th style="width:10%">Acción</th>
                </thead>
                <tbody>
                    <tr v-for="(task, index) in tasks.data  " :key="task.id" 
                        :class="task.status == 'Ejecutada' ? 'bg-warning' : ''">
                        <td> {{index + 1}} </td>
                        <td> {{ task.name}}  </td>
                        <td> {{ task.description }} </td>
                        <td> {{ task.status }} </td>
                        <td> 
                             <router-link :to="{name:'Edit',params:{id:task.id}}" > <button type="button" class="btn-info" data-bs-toggle="tooltip" 
                                data-bs-placement="top" title="Editar Tarea"> <i class="fa fa-edit" aria-hidden="true">
                                </i> </button></router-link> &nbsp;
                             <a href="" @click = "DeleteTask(task.id)"> <button type="button" class="btn-danger" data-bs-toggle="tooltip" 
                                data-bs-placement="top" title="Eliminar Tarea"> <i class="fa fa-trash" aria-hidden="true">
                              </i> </button> </a>
                        </td>
                    </tr>
                </tbody>
              </table>
              <nav aria-label="Page navigation example ">
                <ul class="pagination  justify-content-end">
                    <li class="page-item" :class="{disabled:pagination.page==1}">
                          <a class="page-link"  href="#" aria-label="Previous" @click="pagination.page=1; GetTasks()">&laquo;</a></li>
                    <li class="page-item" :class="{disabled:pagination.page==1}">
                          <a class="page-link" href="#" @click="pagination.page--; GetTasks()">&lt;</a></li>
                    <li class="page-item" v-for="n in tasks.last_page" :key="n" :class="{active:pagination.page==n}">
                          <a class="page-link" href="#" @click="pagination.page=n; GetTasks()">{{n}}</a></li>
                    <li class="page-item" :class="{disabled:pagination.page==tasks.last_page}">
                          <a class="page-link" href="#" @click="pagination.page++; GetTasks()">&gt;</a></li>
                    <li class="page-item" :class="{disabled:pagination.page==tasks.last_page}">
                          <a class="page-link" href="#" aria-label="Next" @click="pagination.page=tasks.last_page; GetTasks()">
                            <span aria-hidden="true">&raquo;</span></a></li>
                </ul>
              </nav>              
            </div>
            </div>
        </div>
      </div>
    </div>
</div>
</template>
<script>
import axios from 'axios';
export default {
    data() {

      return {
        tasks : [],
        pagination : {
          per_page : 5,
          page : 1
        },
        last_page : 0
      }

    },
    created() {
      this.GetTasks();
    },
    methods: {
        async GetTasks() {
            let res = await axios.get('http://localhost/laravel-crud-api/public/api/tasks',{params: this.pagination});
            this.tasks = res.data;
            this.last_page = res.data.last_page
        },
        async DeleteTask(id) {
            await axios.delete('http://localhost/laravel-crud-api/public/api/tasks/'+id);
            alert('Registro Eliminado')       
            window.location.href = "List"
        }
    }
}
</script>