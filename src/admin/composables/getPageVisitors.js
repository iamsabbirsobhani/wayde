import {
    ref
} from 'vue'
import {
    projectFirestore
} from '../../firebase/config'

const loading = ref(false)
const getPageVisitors = () => {
    const vis = ref('')
    // type.value = null
    loading.value = true;
    let collectionRef = projectFirestore.collection('pageVisited')
    // .orderBy('createdAt', 'asc')

    collectionRef.onSnapshot((snap) => {
        let results = []
        // console.log('snapshot')
        snap.docs.forEach(doc => {
            // doc.data().createdAt &&
            results.push({
                ...doc.data(),
                id: doc.id
            })
        })

        vis.value = results
        loading.value = false;
        // console.log(comments.value)
    });
    return {
        vis,
        loading
    }
}
export default getPageVisitors