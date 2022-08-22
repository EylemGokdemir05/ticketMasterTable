import { render } from '@testing-library/vue';
import Table from '../components/Table.vue';

test('should work', () => { 
    const { getEvents } = render(Table, {
        props: {
            events: {}
        }
    })
    getEvents({})
 })