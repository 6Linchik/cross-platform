import React, { useEffect, useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Lab1 from "../labs/lab1/Lab1";
import Lab2 from "../labs/lab2/lab2";
import Lab3 from "../labs/lab3/lab3";
import Lab4 from "../labs/lab4/lab4";
import Lab8 from "../labs/lab8-9/lab8";
import Lab10 from "../labs/lab10-11/lab10";
import Lab7 from "../labs/lab7/lab7";
import Lab6 from "../labs/lab6/lab6";
const Drawer = createDrawerNavigator();
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, push } from "firebase/database";
import loading from "./loading";
import useStore from "../labs/lab10-11/store";
const firebaseConfig = {
    apiKey: "AIzaSyDxUDxE8uymttbABO9_fQW42IKfB8A7rTk",
    authDomain: "lab11-2db54.firebaseapp.com",
    databaseURL:
        "https://lab11-2db54-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "lab11-2db54",
    storageBucket: "lab11-2db54.appspot.com",
    messagingSenderId: "673448840323",
    appId: "1:673448840323:web:c06680615495bd91f55fb6",
    measurementId: "G-EBNMMPGCX5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
function headerTabNavigator() {
    const position = useStore((state: any) => state.position);
    const setPosition = useStore((state: any) => state.setPosition);
    const workers = useStore((state: any) => state.workers);
    const setWorkers = useStore((state: any) => state.setWorkers);

    const activePos = useStore((state: any) => state.activePos);
    const setActivePos = useStore((state: any) => state.setActivePos);

    useEffect(() => {
        onValue(ref(db, "Position"), (querySnapShot) => {
            const data = querySnapShot.val();
            const data2: any[] = [];
            if (Array.isArray(data)) {
                setPosition(data);
                setActivePos(data[0]);
                return;
            }
            for (let key in data) {
                data2.push(data[key]);
            }
            setPosition(data2);
            setActivePos(data2[0]);
        });
        onValue(ref(db, "Worker"), (querySnapShot) => {
            const data = querySnapShot.val();
            const data2: any[] = [];
            if (Array.isArray(data)) {
                setWorkers(data);
                return;
            }
            for (let key in data) {
                data2.push(data[key]);
            }
            setWorkers(data2);
        });
    }, []);
    if (!activePos || position.length === 0 || workers.length === 0) {
        return (
            <Drawer.Navigator useLegacyImplementation={true}>
                <Drawer.Screen name="Лабораторна №1" component={Lab1} />
                <Drawer.Screen name="Лабораторна №2" component={Lab2} />
                <Drawer.Screen name="Лабораторна №3" component={Lab3} />
                <Drawer.Screen name="Лабораторна №4" component={Lab4} />
                <Drawer.Screen name="Лабораторна №6" component={Lab6} />
                <Drawer.Screen name="Лабораторна №7" component={Lab7} />
                <Drawer.Screen name="Лабораторна №8-9" component={Lab8} />
                <Drawer.Screen name="Лабораторна №10-11" component={loading} />
            </Drawer.Navigator>
        );
    }
    return (
        <Drawer.Navigator useLegacyImplementation={true}>
            <Drawer.Screen name="Лабораторна №1" component={Lab1} />
            <Drawer.Screen name="Лабораторна №2" component={Lab2} />
            <Drawer.Screen name="Лабораторна №3" component={Lab3} />
            <Drawer.Screen name="Лабораторна №4" component={Lab4} />
            <Drawer.Screen name="Лабораторна №6" component={Lab6} />
            <Drawer.Screen name="Лабораторна №7" component={Lab7} />
            <Drawer.Screen name="Лабораторна №8-9" component={Lab8} />
            <Drawer.Screen name="Лабораторна №10-11" component={Lab10} />
        </Drawer.Navigator>
    );
}

export default headerTabNavigator;
