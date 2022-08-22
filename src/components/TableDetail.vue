<template>
    <div className="tableDetail">
        <p>Table Detail</p>
        <div className="container"  v-for="(event, index) in events?.events">
            <div className="row pt-4">
                <div className="col-md-6">
                    <div className="img-div">
                        <img v-bind:src="event.images[0].url" className="table-img" alt="...">
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="title">
                        <h5> {{event.name}}</h5>
                    <p className="price">
                        <i>Price</i>
                        <i  v-for ="pricex in event.priceRanges">{{pricex.min}} - {{pricex.max}}$</i>
                    </p>
                    <p className="locale">Locale :{{event.locale}}</p>
                    </div>
                </div>
            </div>
            <div className="row">
            <div className="detail-bottom">
                <h2>Details</h2>
                <div className="details row">
                    <div className="card">
                        <b>Classifications</b>
                        <ul v-for="eventx in event.classifications">
                        <li>{{eventx.segment.name}}</li>
                        <li>{{eventx.genre.name}}</li>
                        <li>{{eventx.subGenre.name}}</li>
                        </ul>
                    </div>
                    <div className="card">
                        <b>Accessibility</b>
                        <img v-bind:src="event.seatmap.staticUrl" className="table-img" alt="...">
                    </div>
                    <div className="card">
                        <b>Dates</b>
                        <p> Local Date: {{event.dates.start.localDate}}</p>
                        <p> Local Time: {{event.dates.start.localTime}}</p>
                        <p> Date Time: {{event.dates.start.dateTime}}</p>
                    </div>
                    <div v-if="event.promoter" className="card">
                        <b>Promoter</b>
                        <p>{{event.promoter.name}}</p>
                    </div>
                    <div className="card">
                        <b>Info</b>
                        <p  v-if="event.info">{{event.info}}</p>
                        <p  v-else>Açıklama Bilgisi Bulunmuyor</p>
                        </div>
                    <div className="card">
                        <b>Sales</b>
                        <i>Public</i>
                        <span className="presales">
                            <p> Start Time:  {{event.sales.public.startDateTime}} </p>
                            <p> End Time:  {{event.sales.public.endDateTime}} </p>
                        </span>
                        <i>presales</i>
                        <span className="presales"  v-for=" eventx in event.sales.presales">
                            <p>Start Time: {{eventx.startDateTime}} </p>
                                <p>End Time: {{eventx.endDateTime}} </p>
                            <p>Name: {{eventx.name}} </p>
                        </span>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import useEvents from '../composables/useEvents';
// import useEventDetail from '../composables/useEventDetail';

const events = ref();
onMounted(async () => {
    events.value = await useEvents();
    //var event = await useEventDetail(events.value.id)
})
defineExpose({ 
    events 
})
// console.log('events: ',events)
// console.log('event detail: ',event)
</script>

<style>
.tableDetail {
    border: 1px black solid;
}
.table-img {
    width: 100px;
    height: 100px;
}
</style>