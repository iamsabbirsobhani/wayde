import { projectFirestore } from "../../firebase/config";

let vc;
let userDataProfile;

const loadDatabase = async () => {
  userDataProfile = await projectFirestore
    .collection("pageVisited")
    .doc("visitorsCount")
    .get();
};

const pageVisited = async () => {
  try {
    await loadDatabase();
    if (userDataProfile.exists) {
        vc = userDataProfile.data().visitors + 1;
    }
    await projectFirestore
      .collection("pageVisited")
      .doc("visitorsCount")
      .update({
        visitors: vc
      });
  } catch (error) {
    console.log(error);
  }
};


export {
    pageVisited
}