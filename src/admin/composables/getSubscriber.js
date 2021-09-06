import {
    ref
} from 'vue'
import {
    projectFirestore
} from '../../firebase/config'


const loading = ref(false)
const getSubscribers = () => {
    const sub = ref('')
    // type.value = null
    loading.value = true;
    let collectionRef = projectFirestore.collection('subscribers')
    .orderBy('createdAt', 'desc')

    collectionRef.onSnapshot((snap) => {
        let results = []
        // console.log('snapshot')
        snap.docs.forEach(doc => {
            doc.data().createdAt &&
                 results.push({
                     ...doc.data(),
                     id: doc.id
                    })
                })

                sub.value = results
                loading.value = false;
                // console.log(comments.value)
            });
    return {
        sub,
        loading
    }
}
export default getSubscribers