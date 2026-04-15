"use client"

import React from 'react';

export default function AboutPage() {
    return (
        <div className="mx-auto max-w-7xl relative min-h-[calc(100vh-64px)] text-black flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold">About Segmenta</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl text-center">
                Segmenta is a tool designed to transform lengthy YouTube tutorials into organized, chapter-based courses.
                Our mission is to make learning more efficient and enjoyable by providing clear sections, progress tracking, and a focus on what truly matters — without the need to scrub through hours of video.
            </p>
        </div>
    )
}