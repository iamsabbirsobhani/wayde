import { projectFirestore } from "../../firebase/config";

const doneDiscussion = async (docId) => {
  let vc;
  try {
    let userDataProfile;
    userDataProfile = await projectFirestore
      .collection("consultation")
      .doc(docId)
      .get();
    if (userDataProfile.exists) {
      vc = userDataProfile.data().done;
      console.log(vc)
    }
    await projectFirestore.collection("consultation").doc(docId).update({
      done: !vc,
    });
  } catch (error) {
    console.log(error);
  }
};

export { doneDiscussion };
