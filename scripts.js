// Dummy data for diseases
const diseaseData = {
    wheat: ["Rust", "Blight"],
    rice: ["Blast", "Sheath Blight"],
    corn: ["Leaf Blight", "Smuts"],
    potato: ["Late Blight", "Early Blight"],
    tomato: ["Early Blight", "Fusarium Wilt"]
};

// Dummy data for recommendations based on crop, disease, and weather conditions
const recommendations = {
    // Wheat
    "wheat-Rust-cool-wet": {
        fertilizer: "Nitrogen-rich Fertilizer",
        pesticides: "Azoxystrobin"
    },
    "wheat-Rust-warm-dry": {
        fertilizer: "Phosphorus-rich Fertilizer",
        pesticides: "Propiconazole"
    },
    "wheat-Blight-cool-wet": {
        fertilizer: "Balanced NPK Fertilizer",
        pesticides: "Chlorothalonil"
    },
    "wheat-Blight-hot-humid": {
        fertilizer: "Potash",
        pesticides: "Mancozeb"
    },

    // Rice
    "rice-Blast-hot-humid": {
        fertilizer: "Balanced NPK Fertilizer",
        pesticides: "Tricyclazole"
    },
    "rice-Blast-cool-wet": {
        fertilizer: "Superphosphate",
        pesticides: "Isoprothiolane"
    },
    "rice-Sheath Blight-warm-dry": {
        fertilizer: "Urea",
        pesticides: "Carbendazim"
    },
    "rice-Sheath Blight-hot-humid": {
        fertilizer: "Ammonium Nitrate",
        pesticides: "Propiconazole"
    },

    // Corn
    "corn-Leaf Blight-cool-wet": {
        fertilizer: "Potassium Sulfate",
        pesticides: "Pyraclostrobin"
    },
    "corn-Leaf Blight-warm-dry": {
        fertilizer: "Nitrogen Fertilizer",
        pesticides: "Propiconazole"
    },
    "corn-Smuts-cool-wet": {
        fertilizer: "NPK Fertilizer",
        pesticides: "Copper oxychloride"
    },
    "corn-Smuts-hot-humid": {
        fertilizer: "Urea",
        pesticides: "Carbendazim"
    },

    // Potato
    "potato-Late Blight-warm-dry": {
        fertilizer: "Potash",
        pesticides: "Mancozeb"
    },
    "potato-Late Blight-cool-wet": {
        fertilizer: "Balanced NPK Fertilizer",
        pesticides: "Chlorothalonil"
    },
    "potato-Early Blight-warm-dry": {
        fertilizer: "Calcium nitrate",
        pesticides: "Dithane M-45"
    },
    "potato-Early Blight-hot-humid": {
        fertilizer: "Phosphorus-rich Fertilizer",
        pesticides: "Copper oxychloride"
    },

    // Tomato
    "tomato-Early Blight-hot-humid": {
        fertilizer: "Calcium nitrate",
        pesticides: "Mancozeb"
    },
    "tomato-Early Blight-cool-wet": {
        fertilizer: "Balanced NPK Fertilizer",
        pesticides: "Chlorothalonil"
    },
    "tomato-Fusarium Wilt-warm-dry": {
        fertilizer: "Potash",
        pesticides: "Fosetyl-Al"
    },
    "tomato-Fusarium Wilt-hot-humid": {
        fertilizer: "Urea",
        pesticides: "Copper oxychloride"
    }
};

function updateDiseaseDropdown() {
    const cropSelect = document.getElementById("crop-select");
    const diseaseSelect = document.getElementById("disease-select");
    const selectedCrop = cropSelect.value;

    diseaseSelect.innerHTML = "<option value=''>--Select a Disease--</option>";

    if (selectedCrop) {
        const diseases = diseaseData[selectedCrop];
        diseases.forEach(disease => {
            const option = document.createElement("option");
            option.value = disease;
            option.textContent = disease;
            diseaseSelect.appendChild(option);
        });
    }

    // Clear previous recommendation
    document.getElementById("recommendation").style.display = "none";
}

function showRecommendation() {
    const cropSelect = document.getElementById("crop-select");
    const diseaseSelect = document.getElementById("disease-select");
    const weatherSelect = document.getElementById("weather-select");
    const selectedCrop = cropSelect.value;
    const selectedDisease = diseaseSelect.value;
    const selectedWeather = weatherSelect.value;

    const recommendationBox = document.getElementById("recommendation");
    const fertilizerField = document.getElementById("fertilizer");
    const pesticidesField = document.getElementById("pesticides");

    if (selectedCrop && selectedDisease && selectedWeather) {
        const recommendationKey = `${selectedCrop}-${selectedDisease}-${selectedWeather}`;
        const recommendation = recommendations[recommendationKey];

        if (recommendation) {
            fertilizerField.textContent = recommendation.fertilizer;
            pesticidesField.textContent = recommendation.pesticides;
        } else {
            fertilizerField.textContent = "Generic Fertilizer";
            pesticidesField.textContent = "Generic Pesticides";
        }
        recommendationBox.style.display = "block";
    } else {
        recommendationBox.style.display = "none";
    }
}

document.getElementById("crop-select").addEventListener("change", function() {
    updateDiseaseDropdown();
});


