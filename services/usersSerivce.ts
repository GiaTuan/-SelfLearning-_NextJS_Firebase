import { FirebaseAuth } from "../firebase/firebase";

export const createUserService: any = async (user: any) => {
    await FirebaseAuth().createUserWithEmailAndPassword(user.email, user.password)
        .then((userCredential) => {
            var { uid }: any = userCredential.user;
            return uid;
        })

}