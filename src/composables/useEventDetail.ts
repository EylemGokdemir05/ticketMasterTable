import { ref } from "vue";
import useFetch from "./useFetch";

export default async function useEventDetail(id: string) {
    const {response: events, request} = useFetch(
        "https://app.ticketmaster.com/discovery/v2/events?id=${id}apikey=5RYaqgnoW9E573bPqKTfRoiY7cvKJnrl"
    );
    console.log('response detail: ',id);
    const loading = ref(false);
    if(loading.value === false) {
        await request();
        loading.value = true;
    }
    return { id }
}