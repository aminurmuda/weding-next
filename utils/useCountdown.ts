import { useEffect, useState } from 'react';

const useCountdown = (targetDate: number) => {
    const [date, setDate] = useState(targetDate)
    const countDownDate = new Date(date).getTime();

    const [countDown, setCountDown] = useState(
        countDownDate - new Date().getTime()
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setCountDown(countDownDate - new Date().getTime());
        }, 1000);

        return () => clearInterval(interval);
    }, [countDownDate]);

    return getReturnValues(countDown);
};

const useTime = (targetDate: number) => {
    const currentTime = new Date().getTime()
    const seconds =  Math.floor((currentTime - targetDate) / 1000)
    const minutes = Math.floor(seconds / 60)
    const hours = Math.floor(seconds / (60 * 60))
    const days = Math.floor(seconds / (60 * 60 * 24))
    const weeks = Math.floor(seconds / (60 * 60 * 24 * 7))
    const months = Math.floor(seconds / (60 * 60 * 24 * 30))
    const years = Math.floor(seconds / (60 * 60 * 24 * 30 * 12))
    if(years > 0) {
        return `${years} tahun yang lalu`
    } else if(months > 0) {
        return `${months} bulan yang lalu`
    } else if(weeks > 0) {
        return `${weeks} pekan yang lalu`
    } else if(days > 0) {
        return `${days} hari yang lalu`
    } else if(hours > 0) {
        return `${hours} jam yang lalu`
    } else if(minutes > 0) {
        return `${minutes} menit yang lalu`
    } else if(seconds > 0) {
        return `baru saja`
    }
};

const getReturnValues = (countDown: number) => {
    // calculate time left
    const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

    return [days, hours, minutes, seconds];
};

export { useCountdown, useTime };
