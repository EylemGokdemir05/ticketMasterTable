<template>
    <input type="text" placeholder="Search..." v-model="searchQuery"/>
    <i class="search icon"></i>
    <table>
        <thead>
            <tr>
                <th scope="col">image</th>
                <th scope="col">name</th>
                <th scope="col">date</th>
                <th scope="col">price ranges</th>
                <th scope="col">venues</th>
                <th scope="col">location</th>
                <th scope="col">Detail</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="event in events?.events">
                <td>
                    <img className="table-img" :src="event.images[0].url" alt="...">
                </td>
                <td>{{event.name}}</td>
                <td>{{ event.dates.start.localDate }} = {{ event.dates.start.localTime }}</td>
                <td><i v-for="price in event.priceRanges">{{ price.min }} - {{ price.max }}$</i></td>
                <td>{{event._embedded.venues[0].name}} </td>
                <td>{{event._embedded.venues[0].city.name}} - {{event._embedded.venues[0].country.countryCode}}.</td>
                <td className="detail">
                    <span className="detailLink">
                        <router-link :to="'/detail/'+event.id">Detail</router-link>
                    </span>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import useEvents from '../composables/useEvents';

const events = ref();
const searchQuery = ref("");
onMounted(async () => {
    events.value = await useEvents();
    console.log('events.value: ',events.value)
})
const searchedEvents = computed(() => {
      return events.value.filter((event:any) => {
        return (
          event.name
            .toLowerCase()
            .indexOf(searchQuery.value.toLowerCase()) != -1
        );
      });
});
defineExpose({ 
    events, searchedEvents, searchQuery
})
</script>

<style>
table {
    border: 2px solid #42b983;
    border-radius: 3px;
    background-color: #fff;
}


th { 
	background-color: #42b983;
    color: rgba(255, 255, 255, 0.66);
    cursor: pointer;
}

td {
  background-color: #f9f9f9;
}

th,
td {
  min-width: 120px;
  padding: 10px 20px;
}
.table-img {
    width: 100px;
    height: 100px;
}
.detail {
    position: relative;
    float: right;
    margin-top: 34px;
    background: grey;
    padding: 15px 20px;
    text-decoration: none;
    border-radius: 5px;
    transition: transform .4s;
}
.detailLink {
    display: block;
    width: 46px;
    height: 25px;
}
.detailLink a{
    display: flex;
    justify-content: center;
    position: absolute;
    left: 0;
    top: 0px;
    width: 100%;
    height: calc(100% - 16px);
    padding-top: 15px;
    text-decoration: none;
    color: white;
    font-size: 18px;
}

</style>