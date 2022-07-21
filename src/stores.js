import { writable } from "svelte/store";

export const FeedbackStore = writable([
    {
        id: 1,
        rating: 10,
        text: 'lorem ipsum'
    },
    {
        id: 2,
        rating: 2,
        text: 'lorem ipsum'
    },
    {
        id: 3,
        rating: 6,
        text: 'lorem ipsum',
    }
])