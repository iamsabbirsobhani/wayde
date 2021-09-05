import {
    ref
} from 'vue'
import {
    projectFirestore
} from '../../firebase/config'

const useConsultation = (collection) => {
    const error = ref(null)

    const postConsultation = async (doc) => {
        error.value = null

        try {
            await projectFirestore.collection(collection).add(doc)
        } catch (err) {
            console.log(err)
            error.value = 'Could not send the comments'
        }
    }

    return {
        error,
        postConsultation
    }
}

export default useConsultation