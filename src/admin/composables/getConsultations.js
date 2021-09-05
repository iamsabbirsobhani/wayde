import {
    ref
} from 'vue'
import {
    projectFirestore
} from '../../firebase/config'


const getConsultations = () => {
    const consultation = ref('')
    const loading = ref(false)
    // type.value = null
    let collectionRef = projectFirestore.collection('consultation')
    // .orderBy('createdAt', 'asc')
        loading.value = true;
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

            consultation.value = results
            loading.value = false;
            // console.log(comments.value)
        });
    return {
        consultation,
        loading
    }
}
export default getConsultations