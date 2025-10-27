# import os
# import pickle
# import pandas as pd
# import numpy as np

# BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# # ✅ Load correct dataset (Training.csv)
# sym_des = pd.read_csv(os.path.join(BASE_DIR, "datasets", "Training.csv"))
# precautions = pd.read_csv(os.path.join(BASE_DIR, "datasets", "precautions_df.csv"))
# workout = pd.read_csv(os.path.join(BASE_DIR, "datasets", "workout_df.csv"))
# description = pd.read_csv(os.path.join(BASE_DIR, "datasets", "description.csv"))
# medications = pd.read_csv(os.path.join(BASE_DIR, "datasets", "medications.csv"))
# diets = pd.read_csv(os.path.join(BASE_DIR, "datasets", "diets.csv"))

# # ✅ Load trained model
# svc = pickle.load(open(os.path.join(BASE_DIR, "models", "svc.pkl"), "rb"))

# # ✅ Create symptom → index mapping automatically
# symptoms_dict = {sym: i for i, sym in enumerate(sym_des.columns[:-1])}

# # ✅ Disease list
# # diseases_list = sym_des["Disease"].unique()
# diseases_list = sym_des["prognosis"].unique()


# def get_predicted_value(patient_symptoms):
#     # Full length input vector (132 features)
#     input_vector = np.zeros(len(symptoms_dict))
#     for item in patient_symptoms:
#         if item in symptoms_dict:
#             input_vector[symptoms_dict[item]] = 1
#         else:
#             print(f"⚠️ Warning: Symptom '{item}' not found in symptoms_dict")
#     # Predict using model
#     predicted_disease = svc.predict([input_vector])[0]
#     return predicted_disease

# def helper(dis):
#     desc = " ".join(description[description['Disease'] == dis]['Description'].values)
#     pre = precautions[precautions['Disease'] == dis][['Precaution_1','Precaution_2','Precaution_3','Precaution_4']].values.tolist()
#     med = medications[medications['Disease'] == dis]['Medication'].values.tolist()
#     die = diets[diets['Disease'] == dis]['Diet'].values.tolist()
#     wrkout = workout[workout['disease'] == dis]['workout'].values.tolist()
#     return desc, pre, med, die, wrkout


#//////////////
import os
import pickle
import pandas as pd
import numpy as np

# ---------- Base Directory ----------
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# ---------- Load Datasets ----------
sym_des = pd.read_csv(os.path.join(BASE_DIR, "datasets", "Training.csv"))
precautions = pd.read_csv(os.path.join(BASE_DIR, "datasets", "precautions_df.csv"))
workout = pd.read_csv(os.path.join(BASE_DIR, "datasets", "workout_df.csv"))
description = pd.read_csv(os.path.join(BASE_DIR, "datasets", "description.csv"))
medications = pd.read_csv(os.path.join(BASE_DIR, "datasets", "medications.csv"))
diets = pd.read_csv(os.path.join(BASE_DIR, "datasets", "diets.csv"))

# ---------- Load Model ----------
svc = pickle.load(open(os.path.join(BASE_DIR, "models", "svc.pkl"), "rb"))

# ---------- Prepare Data ----------
# Create symptom → index mapping
symptoms_dict = {sym: i for i, sym in enumerate(sym_des.columns[:-1])}

# List of all possible diseases (for mapping integer → disease name)
diseases_list = sorted(sym_des["prognosis"].unique())

# ---------- Prediction Function ----------
def get_predicted_value(patient_symptoms):
    """
    Given a list of symptoms, returns the predicted disease name.
    """
    input_vector = np.zeros(len(symptoms_dict))

    for symptom in patient_symptoms:
        if symptom in symptoms_dict:
            input_vector[symptoms_dict[symptom]] = 1
        else:
            print(f"⚠️ Warning: Symptom '{symptom}' not found in dataset")

    predicted = svc.predict([input_vector])[0]

    # Handle integer or encoded output (e.g. 15 → actual disease name)
    if isinstance(predicted, (int, np.integer)):
        try:
            predicted = diseases_list[int(predicted)]
        except Exception:
            pass

    return predicted

# ---------- Helper Function ----------
def helper(disease):
    """
    Returns description, precautions, medications, diet, and workout
    for the predicted disease.
    """
    desc = " ".join(description[description['Disease'] == disease]['Description'].values)

    pre = precautions[precautions['Disease'] == disease][
        ['Precaution_1', 'Precaution_2', 'Precaution_3', 'Precaution_4']
    ].values.tolist()

    med = medications[medications['Disease'] == disease]['Medication'].values.tolist()
    die = diets[diets['Disease'] == disease]['Diet'].values.tolist()
    wrkout = workout[workout['disease'] == disease]['workout'].values.tolist()

    return desc, pre, med, die, wrkout
