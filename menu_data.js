const menuData = [

    // =====================
    // --- MEN'S MENU ---
    // =====================

    { gender: "Men", category: "Hair Styling", service: "Hair Cut", reg: "250", vip: "200" },
    { gender: "Men", category: "Hair Styling", service: "Shaving", reg: "100", vip: "100" },
    { gender: "Men", category: "Hair Styling", service: "Beard Design", reg: "150", vip: "120" },
    { gender: "Men", category: "Hair Styling", service: "Hair Wash", reg: "100", vip: "100" },
    { gender: "Men", category: "Hair Styling", service: "Blow Dry Styling", reg: "100", vip: "100" },
    { gender: "Men", category: "Hair Styling", service: "Kids Hair Cut", reg: "200", vip: "160" },
    { gender: "Men", category: "Hair Styling", service: "Trimming", reg: "100", vip: "100" },
    { gender: "Men", category: "Hair Styling", service: "Head Shave", reg: "200", vip: "160" },

    { gender: "Men", category: "Hair Colour", service: "Moustache Colour", reg: "150", vip: "120" },
    { gender: "Men", category: "Hair Colour", service: "Beard Colour", reg: "300", vip: "240" },
    { gender: "Men", category: "Hair Colour", service: "Hair Colour - Loreal", reg: "900", vip: "720" },
    { gender: "Men", category: "Hair Colour", service: "Ammonia Free Colour", reg: "1200", vip: "960" },
    { gender: "Men", category: "Hair Colour", service: "All Fashion Colour", reg: "1500", vip: "1200" },

    { gender: "Men", category: "Hair Treatments", service: "Highlights (Per Foil)", reg: "200", vip: "160" },
    { gender: "Men", category: "Hair Treatments", service: "Keratin", reg: "2500+", vip: "2000+" },
    { gender: "Men", category: "Hair Treatments", service: "Botox", reg: "2500+", vip: "2000+" },
    { gender: "Men", category: "Hair Treatments", service: "Smoothening", reg: "2500+", vip: "2000+" },

    { gender: "Men", category: "Hair Spa", service: "Smooth Spa", reg: "900", vip: "720" },
    { gender: "Men", category: "Hair Spa", service: "Nourishing Spa", reg: "900", vip: "720" },
    { gender: "Men", category: "Hair Spa", service: "Damage Repair Spa", reg: "1000", vip: "800" },
    { gender: "Men", category: "Hair Spa", service: "Anti Hairfall Spa", reg: "1200", vip: "960" },
    { gender: "Men", category: "Hair Spa", service: "Power Mix Protein Spa", reg: "1400", vip: "1120" },
    { gender: "Men", category: "Hair Spa", service: "Anti Dandruff Spa", reg: "1800", vip: "1440" },

    { gender: "Men", category: "Clean Up", service: "Fruit Clean Up", reg: "900", vip: "720" },
    { gender: "Men", category: "Clean Up", service: "Lotus Clean Up", reg: "1000", vip: "800" },
    { gender: "Men", category: "Clean Up", service: "Whitening Clean Up", reg: "1000", vip: "800" },
    { gender: "Men", category: "Clean Up", service: "De-Tan Clean Up", reg: "1000", vip: "800" },
    { gender: "Men", category: "Clean Up", service: "Papaya Clean Up", reg: "1000", vip: "800" },
    { gender: "Men", category: "Clean Up", service: "Enzyme Clean Up", reg: "1100", vip: "880" },
    { gender: "Men", category: "Clean Up", service: "Skin Lightening Clean Up", reg: "1200", vip: "960" },
    { gender: "Men", category: "Clean Up", service: "Kanpeki Clean Up", reg: "1300", vip: "1040" },
    { gender: "Men", category: "Clean Up", service: "O3+ Clean Up", reg: "1500", vip: "1200" },

    { gender: "Men", category: "Massages", service: "Head Massage - Coconut Oil", reg: "300", vip: "240" },
    { gender: "Men", category: "Massages", service: "Head Massage - Almond Oil", reg: "300", vip: "240" },
    { gender: "Men", category: "Massages", service: "Head Massage - Navratan", reg: "300", vip: "240" },
    { gender: "Men", category: "Massages", service: "Head Massage - Olive Oil", reg: "350", vip: "280" },
    { gender: "Men", category: "Massages", service: "Hands Massage", reg: "200", vip: "160" },
    { gender: "Men", category: "Massages", service: "Foot Massage", reg: "300", vip: "240" },
    { gender: "Men", category: "Massages", service: "Legs Massage", reg: "500", vip: "400" },

    { gender: "Men", category: "Facial ", service: "Fruit Facial", reg: "1000", vip: "800" },
    { gender: "Men", category: "Facial ", service: "Papaya Facial", reg: "1200", vip: "960" },
    { gender: "Men", category: "Facial ", service: "Pearl Facial", reg: "1250", vip: "1000" },
    { gender: "Men", category: "Facial ", service: "Anti-Acne Facial", reg: "1300", vip: "1040" },
    { gender: "Men", category: "Facial ", service: "Wine Facial", reg: "1600", vip: "1280" },
    { gender: "Men", category: "Facial ", service: "Gold Facial", reg: "1700", vip: "1360" },
    { gender: "Men", category: "Facial ", service: "Diamond Facial", reg: "2000", vip: "1600" },

    { gender: "Men", category: "Facial Premium", service: "Raga Fairness", reg: "2100", vip: "1680" },
    { gender: "Men", category: "Facial Premium", service: "Raga Facial Express", reg: "2200", vip: "1760" },
    { gender: "Men", category: "Facial Premium", service: "Raga Gold", reg: "2400", vip: "1920" },
    { gender: "Men", category: "Facial Premium", service: "Premium Lotus Facial", reg: "2500", vip: "2000" },
    { gender: "Men", category: "Facial Premium", service: "Deep De-Tan", reg: "2500", vip: "2000" },
    { gender: "Men", category: "Facial Premium", service: "Skin Miracle", reg: "2700", vip: "2160" },
    { gender: "Men", category: "Facial Premium", service: "Kanpeki Facial", reg: "3000", vip: "2400" },
    { gender: "Men", category: "Facial Premium", service: "O3+ Whitening", reg: "3800", vip: "3040" },
    { gender: "Men", category: "Facial Premium", service: "Hydra Facial", reg: "5000", vip: "4000" },

    { gender: "Men", category: "Pedicure", service: "Regular Pedicure", reg: "800", vip: "640" },
    { gender: "Men", category: "Pedicure", service: "Spa Pedicure", reg: "1000", vip: "800" },
    { gender: "Men", category: "Pedicure", service: "Raaga Pedicure", reg: "1200", vip: "960" },
    { gender: "Men", category: "Pedicure", service: "Crystal Pedicure", reg: "1300", vip: "1040" },
    { gender: "Men", category: "Pedicure", service: "Bubblegum Pedicure", reg: "1500", vip: "1200" },
    { gender: "Men", category: "Pedicure", service: "Vedic Valley Pedicure", reg: "1600", vip: "1280" },
    { gender: "Men", category: "Pedicure", service: "De-Tan Pedicure", reg: "1600", vip: "1280" },

    { gender: "Men", category: "Manicure", service: "Regular Manicure", reg: "700", vip: "560" },
    { gender: "Men", category: "Manicure", service: "Spa Manicure", reg: "900", vip: "720" },
    { gender: "Men", category: "Manicure", service: "Crystal Manicure", reg: "1000", vip: "800" },
    { gender: "Men", category: "Manicure", service: "Raaga Manicure", reg: "1100", vip: "880" },
    { gender: "Men", category: "Manicure", service: "Bubblegum Manicure", reg: "1300", vip: "1040" },
    { gender: "Men", category: "Manicure", service: "De-Tan Manicure", reg: "1400", vip: "1120" },
    { gender: "Men", category: "Manicure", service: "Vedic Valley Manicure", reg: "1500", vip: "1200" },

    { gender: "Men", category: "De-Tan", service: "Face", reg: "600", vip: "480" },
    { gender: "Men", category: "De-Tan", service: "Face & Neck", reg: "800", vip: "640" },
    { gender: "Men", category: "De-Tan", service: "De-Tan & Mask", reg: "1200", vip: "960" },
    { gender: "Men", category: "De-Tan", service: "Half Arms", reg: "600", vip: "480" },
    { gender: "Men", category: "De-Tan", service: "Full Arms", reg: "800", vip: "640" },
    { gender: "Men", category: "De-Tan", service: "Half Legs", reg: "800", vip: "640" },
    { gender: "Men", category: "De-Tan", service: "Full Legs", reg: "1000", vip: "800" },
    { gender: "Men", category: "De-Tan", service: "Feet", reg: "450", vip: "360" },
    { gender: "Men", category: "De-Tan", service: "Full Body", reg: "4000", vip: "3200" },

    // ========================
    // --- WOMEN MENU ---
    // ========================

    { gender: "Women", category: "Hair Styling", service: "Basic Hair Cut U/V", reg: "500", vip: "400" },
    { gender: "Women", category: "Hair Styling", service: "Advance Hair Cut", reg: "900", vip: "720" },
    { gender: "Women", category: "Hair Styling", service: "Advance Hair Cut + Hair Wash", reg: "1200", vip: "960" },
    { gender: "Women", category: "Hair Styling", service: "Kids Hair Cut", reg: "300", vip: "240" },
    { gender: "Women", category: "Hair Styling", service: "Only Hair Wash", reg: "300", vip: "240" },
    { gender: "Women", category: "Hair Styling", service: "Blow Dry & Styling", reg: "500", vip: "400" },
    { gender: "Women", category: "Hair Styling", service: "Ironing", reg: "800", vip: "640" },
    { gender: "Women", category: "Hair Styling", service: "Toning", reg: "800", vip: "640" },
    { gender: "Women", category: "Hair Styling", service: "Crimping", reg: "800", vip: "640" },

    { gender: "Women", category: "Hair Colour", service: "Root Touch Up", reg: "1200", vip: "960" },
    { gender: "Women", category: "Hair Colour", service: "Root Touch Up (Ammonia Free)", reg: "1500", vip: "1200" },
    { gender: "Women", category: "Hair Colour", service: "Hair Colour - Global (S)", reg: "3500", vip: "2800" },
    { gender: "Women", category: "Hair Colour", service: "Hair Colour - Global (M)", reg: "4000", vip: "3200" },
    { gender: "Women", category: "Hair Colour", service: "Hair Colour - Global (L)", reg: "5000", vip: "4000" },

    { gender: "Women", category: "Highlights", service: "Per Foil", reg: "400", vip: "320" },
    { gender: "Women", category: "Highlights", service: "Balayage (S)", reg: "5000", vip: "4000" },
    { gender: "Women", category: "Highlights", service: "Balayage (M)", reg: "5500", vip: "4400" },
    { gender: "Women", category: "Highlights", service: "Balayage (L)", reg: "6500", vip: "5200" },

    { gender: "Women", category: "Hair Spa Treatment", service: "Classic Hair Treatment", reg: "1200", vip: "960" },
    { gender: "Women", category: "Hair Spa Treatment", service: "Anti Dandruff Treatment", reg: "1800", vip: "1440" },
    { gender: "Women", category: "Hair Spa Treatment", service: "Anti Hairfall Spa", reg: "1600", vip: "1280" },
    { gender: "Women", category: "Hair Spa Treatment", service: "Protein Spa (As per Length)", reg: "1500", vip: "1200" },

    // -------- Hair Keratin --------
    { gender: "Women", category: "Hair Keratin", service: "Keratin Hair Treatment (S)", reg: "5000", vip: "4000" },
    { gender: "Women", category: "Hair Keratin", service: "Keratin Hair Treatment (M)", reg: "6000", vip: "4800" },
    { gender: "Women", category: "Hair Keratin", service: "Keratin Hair Treatment (L)", reg: "7000", vip: "5600" },

    // -------- Hair Botox --------
    { gender: "Women", category: "Hair Botox", service: "Botox Hair Treatment (S)", reg: "5000", vip: "4000" },
    { gender: "Women", category: "Hair Botox", service: "Botox Hair Treatment (M)", reg: "6000", vip: "4800" },
    { gender: "Women", category: "Hair Botox", service: "Botox Hair Treatment (L)", reg: "7000", vip: "5600" },

    // -------- Hair Smoothening --------
    { gender: "Women", category: "Hair Smoothening", service: "Hair Smoothening (S)", reg: "6000", vip: "4800" },
    { gender: "Women", category: "Hair Smoothening", service: "Hair Smoothening (M)", reg: "8000", vip: "6400" },
    { gender: "Women", category: "Hair Smoothening", service: "Hair Smoothening (L)", reg: "9000", vip: "7200" },

    { gender: "Women", category: "Clean Up", service: "Fruit Clean Up", reg: "900", vip: "720" },
    { gender: "Women", category: "Clean Up", service: "Lotus Clean Up", reg: "1000", vip: "800" },
    { gender: "Women", category: "Clean Up", service: "Whitening Clean Up", reg: "1000", vip: "800" },
    { gender: "Women", category: "Clean Up", service: "De-Tan Clean Up", reg: "1000", vip: "800" },
    { gender: "Women", category: "Clean Up", service: "Papaya Clean Up", reg: "1000", vip: "800" },
    { gender: "Women", category: "Clean Up", service: "Enzyme Clean Up", reg: "1100", vip: "880" },
    { gender: "Women", category: "Clean Up", service: "Skin Lightening Clean Up", reg: "1200", vip: "960" },
    { gender: "Women", category: "Clean Up", service: "Kanpeki Clean Up", reg: "1300", vip: "1040" },
    { gender: "Women", category: "Clean Up", service: "O3+ Clean Up", reg: "1500", vip: "1200" },

    { gender: "Women", category: "Facial", service: "Fruit Facial", reg: "1200", vip: "960" },
    { gender: "Women", category: "Facial", service: "Pearl Facial", reg: "1300", vip: "1040" },
    { gender: "Women", category: "Facial", service: "Anti-Acne Facial", reg: "1300", vip: "1040" },
    { gender: "Women", category: "Facial", service: "Papaya Facial", reg: "1400", vip: "1120" },
    { gender: "Women", category: "Facial", service: "Wine Facial", reg: "1600", vip: "1280" },
    { gender: "Women", category: "Facial", service: "Gold Facial", reg: "1800", vip: "1440" },
    { gender: "Women", category: "Facial", service: "Diamond Facial (Premium)", reg: "2000", vip: "1600" },

    { gender: "Women", category: "Facial Premium", service: "Raga Fairness", reg: "2100", vip: "1680" },
    { gender: "Women", category: "Facial Premium", service: "Raga Facial Express", reg: "2200", vip: "1760" },
    { gender: "Women", category: "Facial Premium", service: "Raga Gold", reg: "2700", vip: "2160" },
    { gender: "Women", category: "Facial Premium", service: "Premium Lotus Facial", reg: "2500", vip: "2000" },
    { gender: "Women", category: "Facial Premium", service: "Deep De-Tan", reg: "2500", vip: "2000" },
    { gender: "Women", category: "Facial Premium", service: "Skin Miracle", reg: "2750", vip: "2200" },
    { gender: "Women", category: "Facial Premium", service: "Kanpeki Facial", reg: "3500", vip: "2800" },
    { gender: "Women", category: "Facial Premium", service: "O3+ Whitening", reg: "3800", vip: "3040" },
    { gender: "Women", category: "Facial Premium", service: "Hydra Facial", reg: "5000", vip: "4000" },

    // -------- Pedicure --------
    { gender: "Women", category: "Pedicure", service: "Regular Pedicure", reg: "800", vip: "640" },
    { gender: "Women", category: "Pedicure", service: "Spa Pedicure", reg: "1000", vip: "800" },
    { gender: "Women", category: "Pedicure", service: "Raaga Pedicure", reg: "1200", vip: "960" },
    { gender: "Women", category: "Pedicure", service: "Crystal Pedicure", reg: "1300", vip: "1040" },
    { gender: "Women", category: "Pedicure", service: "Bubblegum Pedicure", reg: "1500", vip: "1200" },
    { gender: "Women", category: "Pedicure", service: "Vedic Valley Pedicure", reg: "1600", vip: "1280" },
    { gender: "Women", category: "Pedicure", service: "De-tan Pedicure", reg: "1600", vip: "1280" },

    // -------- Manicure --------
    { gender: "Women", category: "Manicure", service: "Regular Manicure", reg: "700", vip: "560" },
    { gender: "Women", category: "Manicure", service: "Spa Manicure", reg: "900", vip: "720" },
    { gender: "Women", category: "Manicure", service: "Crystal Manicure", reg: "1000", vip: "800" },
    { gender: "Women", category: "Manicure", service: "Raaga Manicure", reg: "1100", vip: "880" },
    { gender: "Women", category: "Manicure", service: "Bubblegum Manicure", reg: "1300", vip: "1040" },
    { gender: "Women", category: "Manicure", service: "De-tan Manicure", reg: "1400", vip: "1120" },
    { gender: "Women", category: "Manicure", service: "Vedic Valley Manicure", reg: "1500", vip: "1200" },

    // -------- Head Massages --------
    { gender: "Women", category: "Head Massage", service: "Navratan Oil", reg: "500", vip: "400" },
    { gender: "Women", category: "Head Massage", service: "Amaravati Oil", reg: "500", vip: "400" },
    { gender: "Women", category: "Head Massage", service: "Almond Oil", reg: "600", vip: "480" },
    { gender: "Women", category: "Head Massage", service: "Coconut Oil", reg: "500", vip: "400" },
    { gender: "Women", category: "Head Massage", service: "Olive Oil", reg: "650", vip: "520" },

    // -------- Massages --------
    { gender: "Women", category: "Massage", service: "Hands Massage", reg: "500", vip: "400" },
    { gender: "Women", category: "Massage", service: "Legs Massage", reg: "650", vip: "520" },
    { gender: "Women", category: "Massage", service: "Foot Massage", reg: "450", vip: "360" },
    { gender: "Women", category: "Massage", service: "Back Massage", reg: "500", vip: "400" },
    { gender: "Women", category: "Massage", service: "Body Polishing", reg: "6000", vip: "4800" },
    { gender: "Women", category: "Massage", service: "Full Body Oil Massage", reg: "4000", vip: "3200" },

    { gender: "Women", category: "Waxing", service: "Chin", reg: "50", vip: "50" },
    { gender: "Women", category: "Waxing", service: "Upper Lips", reg: "80", vip: "80" },
    { gender: "Women", category: "Waxing", service: "Forehead", reg: "80", vip: "80" },
    { gender: "Women", category: "Waxing", service: "Sides", reg: "100", vip: "100" },
    { gender: "Women", category: "Waxing", service: "Full Face", reg: "450", vip: "360" },
    { gender: "Women", category: "Waxing", service: "Under Arms", reg: "150", vip: "120" },
    { gender: "Women", category: "Waxing", service: "Half Arms", reg: "250", vip: "200" },
    { gender: "Women", category: "Waxing", service: "Full Arms", reg: "450", vip: "360" },
    { gender: "Women", category: "Waxing", service: "Half Legs", reg: "450", vip: "360" },
    { gender: "Women", category: "Waxing", service: "Full Legs", reg: "700", vip: "560" },
    { gender: "Women", category: "Waxing", service: "Back", reg: "600", vip: "480" },
    { gender: "Women", category: "Waxing", service: "Full Body", reg: "2000", vip: "1600" },

    { gender: "Women", category: "Chocolate Waxing", service: "Half Arm", reg: "550", vip: "440" },
    { gender: "Women", category: "Chocolate Waxing", service: "Full Arm", reg: "700", vip: "560" },
    { gender: "Women", category: "Chocolate Waxing", service: "Half Legs", reg: "550", vip: "440" },
    { gender: "Women", category: "Chocolate Waxing", service: "Full Legs", reg: "800", vip: "640" },
    { gender: "Women", category: "Chocolate Waxing", service: "Under Arms", reg: "160", vip: "128" },
    { gender: "Women", category: "Chocolate Waxing", service: "Full Body", reg: "3750", vip: "3000" },

    // -------- Rica Waxing --------
    { gender: "Women", category: "Rica Waxing", service: "Under Arms", reg: "200", vip: "160" },
    { gender: "Women", category: "Rica Waxing", service: "Half Arms", reg: "450", vip: "360" },
    { gender: "Women", category: "Rica Waxing", service: "Full Arms", reg: "800", vip: "640" },
    { gender: "Women", category: "Rica Waxing", service: "Half Legs", reg: "600", vip: "480" },
    { gender: "Women", category: "Rica Waxing", service: "Full Legs", reg: "1000", vip: "800" },
    { gender: "Women", category: "Rica Waxing", service: "Front & Back", reg: "1500", vip: "1200" },
    { gender: "Women", category: "Rica Waxing", service: "Full Body", reg: "4375", vip: "3500" },

    // -------- Threading --------
    { gender: "Women", category: "Threading", service: "Eye Brows", reg: "50", vip: "50" },
    { gender: "Women", category: "Threading", service: "Upper Lips", reg: "30", vip: "30" },
    { gender: "Women", category: "Threading", service: "Chin", reg: "30", vip: "30" },
    { gender: "Women", category: "Threading", service: "Sides", reg: "60", vip: "60" },
    { gender: "Women", category: "Threading", service: "Forehead", reg: "50", vip: "50" },

    // -------- De-Tan --------
    { gender: "Women", category: "De-Tan", service: "Face", reg: "600", vip: "480" },
    { gender: "Women", category: "De-Tan", service: "Face & Neck", reg: "800", vip: "640" },
    { gender: "Women", category: "De-Tan", service: "De-Tan & Mask", reg: "1200", vip: "960" },
    { gender: "Women", category: "De-Tan", service: "Half Arms", reg: "600", vip: "480" },
    { gender: "Women", category: "De-Tan", service: "Full Arms", reg: "800", vip: "640" },
    { gender: "Women", category: "De-Tan", service: "Half Legs", reg: "600", vip: "480" },
    { gender: "Women", category: "De-Tan", service: "Full Legs", reg: "1000", vip: "800" },
    { gender: "Women", category: "De-Tan", service: "Feet", reg: "450", vip: "360" },
    { gender: "Women", category: "De-Tan", service: "Full Body", reg: "4000", vip: "3200" }

];

