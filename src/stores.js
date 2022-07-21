import { writable } from "svelte/store";

export const FeedbackStore = writable([
    {
        id: 1,
        rating: 10,
        text: 'This is the best service ever'
    },
    {
        id: 2,
        rating: 2,
        text: 'Try working on your customer-care'
    },
    {
        id: 3,
        rating: 9,
        text: 'I Love it',
    }
])