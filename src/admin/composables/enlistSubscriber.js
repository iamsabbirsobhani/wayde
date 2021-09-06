import { projectFirestore } from "../../firebase/config";

const subscribers = async (docId) => {
  let vc;
  try {
    let userDataProfile;
    userDataProfile = await projectFirestore
      .collection("subscribers")
      .doc(docId)
      .get();
    if (userDataProfile.exists) {
      vc = userDataProfile.data().done;
      console.log(vc)
    }
    await projectFirestore.collection("subscribers").doc(docId).update({
      done: !vc,
    });
  } catch (error) {
    console.log(error);
  }
};

export { subscribers };
