import { collection, getDocs } from "firebase/firestore";
import db from "../firebase/config";


const dataReturn = async (item) => {
        const colRef = collection(db, item);
        const snapShots = await getDocs(colRef);
        const docs = snapShots.docs.map((doc) => doc.data());
        return docs
}

export default dataReturn;