import { ref } from "vue";
import useFetch from "./useFetch";

export default async function useEvents() {
    const {response: events, request} = useFetch(
        "https://app.ticketmaster.com/discovery/v2/events?apikey=5RYaqgnoW9E573bPqKTfRoiY7cvKJnrl"
    );
    console.log('response: ',{events});
    const loading = ref(false);
    if(loading.value === false) {
        await request();
        loading.value = true;
    }
    return { events: JSON.parse(JSON.stringify(events.value._embedded.events)) }
}