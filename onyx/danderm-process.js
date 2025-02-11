 /**
 * Implements JavaScript functions to save images in http://www.danderm-pdv.is.kkh.dk/atlas/index.html
 * Authors: Ken Kahn
 * License: New BSD
 */

add_button = () => {

data = ["4-38",
"	Leukonychia",
"4-38-1",
"	Leukonychia",
"4-38-2",
"	Leukonychia",
"4-38-3",
"	Leukonychia",
"4-39",
"	Leukonychia",
"4-40",
"	Traumatic nail changes following sports (squash)",
"4-40-1",
"	Nail dystrophy following sport (Danish hand ball) (1 of 2)",
"4-40-2",
"	Nail dystrophy following sport (Danish hand ball) (2 of 2)",
"4-40-3",
"	Traumatic nail changes following sports",
"4-40-4",
"	Traumatic nail changes following sports",
"4-40-5",
"	Traumatic nail changes following sports",
"4-40-6",
"	Traumatic nail changes following sports",
"4-40-7",
"	Traumatic nail changes following sports",
"4-40-8",
"	Traumatic nail changes from horseback riding",
"4-40-9",
"	Traumatic nail changes following sports",
"4-40-10",
"	Traumatic nail changes following sports",
"4-41",
"	Subungual haemorrhage (traumatic)",
"4-41-1",
"	Subungual haemorrhage (traumatic",
"4-41-2",
"	Subungual haemorrhage (traumatic",
"4-41-3",
"	Onycholysis traumatic 1 of 2",
"4-41-4",
"	Onycholysis traumatic 2 of 2",
"4-42",
"	Onychogryposis",
"4-43",
"	Onychogryposis",
"4-43-1 ",
"	Onychodystrophy 1 of 2",
"4-43-2",
"	Onychodystrophy 2 of 2",
"4-43-3 ",
"	Senile nails",
"4-44",
"	Pincer nails",
"4-44-1",
"	Pincer nail 1 of 3",
"4-44-2",
"	Pincer nail 2 of 3",
"4-44-3",
"	Pincer nail 3 of 3",
"4-44-4",
"	Pincer nail 1 of 2",
"4-44-5",
"	Pincer nail 2 of 2",
"4-45",
"	Pincer nails",
"4-45-1",
"	Pincer nail",
"4-45-2",
"	Malalignment of toes",
"4-45-3",
"	Malalignment of toes",
"4-45-4",
"	Malalignment of nails",
"4-45-5",
"	Hypercurvature of nails",
"4-46",
"	20 nail dystrophy (1 of 4)",
"4-47",
"	20 nail dystrophy (2 of 4)",
"4-48",
"	20 nail dystrophy (3 of 4)",
"4-49",
"	20 nail dystrophy (4 of 4)",
"4-49-1",
"	Nail dystrophy",
"4-50",
"	Onycholysis",
"4-51",
"	Onycholysis",
"4-52",
"	Onycholysis, traumatic occupational in a slaughterhouse worker from removing hog hides",
"4-52-1",
"	Onycholysis (traumatic)",
"4-53",
"	Half and half nails",
"4-54",
"	Periungual abscess",
"4-54-1",
"	Periungual abscess",
"4-55",
"	Acute paronychion",
"4-5-1",
"	Acute paronychion",
"4-56",
"	Chronic paronychion",
"4-56-1",
"	Chronic paronychion",
"4-57",
"	Chronic paronychion (1 of 2)",
"4-58",
"	Chronic paronychion (2 of 2)",
"4-59",
"	Nail infection with Pseudomonas aeruginosa",
"4-59-1",
"	Nail infection with Pseudomonas aeruginosa",
"4-59-2",
"	Nail infection with Pseudomonas aeruginosa",
"4-59-3",
"	Nail infection with Pseudomonas aeruginosa",
"4-59-4",
"	Nail infection with Pseudomonas aeruginosa",
"4-59-5",
"	Nail infection with Pseudomonas aeruginosa",
"4-59-6",
"	Nail infection with Pseudomonas aeruginosa",
"4-60",
"	Nail infection with Pseudomonas aeruginosa",
"4-61",
"	Superficial white onychomycosis",
"4-62",
"	Superficial white onychomycosis",
"4-63",
"	Onychomycosis",
"4-63-1",
"	Onychomycosis 1 of 3",
"4-63-2",
"	Onychomycosis 2 of 3",
"4-63-3",
"	Onychomycosis 3 of 3",
"4-63-5",
"	Onychomycosis",
"4-63-6 ",
"	Onychomycosis",
"4-63-7",
"	Onychomycosis",
"4-64",
"	Onychomycosis",
"4-65",
"	Onychomycosis",
"4-66",
"	Nail infection with Aspergillus",
"4-67",
"	Lichen planus of the nails",
"4-67-1",
"	Lichen planus of the nails 1 of 4",
"4-67-2",
"	Lichen planus of the nails 2 of 4",
"4-67-3",
"	Lichen planus of the nails 3 of 4",
"4-67-4",
"	Lichen planus of the nails 4 of 4",
"4-67-5",
"	Lichen planus of the nails 1 of 2",
"4-67-6",
"	Lichen planus of the nails 2 of 2",
"4-68",
"	Lichen planus of the nails",
"4-69",
"	Darier's disease of the nails. Note lesions on the skin of the thumb",
"4-69-1",
"	Darier´s disease of the nails 1 of 4",
"4-69-2",
"	Darier´s disease of the nails 2 of 4",
"4-69-3",
"	Darier´s disease of the nails 3 of 4",
"4-69-4",
"	Darier´s disease of the nails 4 of 4",
"4-70",
"	Darier's disease of the nails",
"4-71",
"	Darier's disease of the nails",
"4-72",
"	Psoriasis of the nails – pitting",
"4-72-1",
"	Psoriasis of the nails – pitting",
"4-73",
"	Psoriasis of the nails – onycholysis and subungual lesions",
"4-73-1",
"	4-73-1 Psoriasis - early proximal lesions",
"4-74",
"	Psoriasis – nail changes and arthropathy",
"4-74-1",
"	Psoriasis of the nails 1 of 2",
"4-74-2",
"	Psoriasis of the nails 2 of 2",
"4-74-4",
"	Psoriasis of the nails",
"4-74-5",
"	Psoriasis of the nails 1 of 3",
"4-74-6",
"	Psoriasis of the nails 2 of 3",
"4-74-7",
"	Psoriasis of the nails 3 of 3",
"4-74-9",
"	Psoriasis of the nails",
"4-74-10",
"	Psoriasis of the nails 1 of 3",
"4-74-11",
"	Psoriasis of the nails 2 of 3",
"4-74-12",
"	Psoriasis of the nails 3 of 3",
"4-74-13",
"	Psoriasis of the nails",
"4-74-14",
"	Psoriasis of the nails",
"4-74-15",
"	Psoriasis of the nails",
"4-75",
"	Psoriasis – severe destructive nail changes in an alcoholic (1 of 2)",
"4-76",
"	Psoriasis – severe destructive nail changes in an alcoholic (2 of 2)",
"4-77",
"	Lupus erythematosus disseminatus of the paronychion",
"4-77-1",
"	Ingrown toe nail",
"4-78",
"	A Beau groove",
"4-78-1",
"	A Beau groove",
"4-78-2",
"	A Beau groove",
"4-78-3 ",
"	Beau furrows",
"4-79",
"	Koilonychia",
"4-79-1",
"	Koilonychia",
"4-79-2",
"	Koilonychia",
"4-79-3",
"	Koilonychia 1 of 2",
"4-79-4 ",
"	Koilonychia 2 of 2",
"4-80",
"	Nail dystrophy seen in an alcoholic",
"4-80-1",
"	Eczema nail",
"4-80-2",
"	Eczema nails",
"4-80-3",
"	Eczema nail",
"4-80-4",
"	Eczema nail",
"4-80-5",
"	Eczema nail",
"4-80-6",
"	Eczema nail",
"4-80-7",
"	Eczema nail",
"4-80-10",
"	Nail dystrophy idiopathic 1 of 2",
"4-80-11",
"	Nail dystrophy idiopathic 2 of 2",
"4-81",
"	Clubbing of the nails",
"4-81-1",
"	Clubbing of nails 1 of 3",
"4-81-3",
"	Clubbing of nails 3 of 3",
"4-81-4",
"	Clubbing of fingers 1 of 2",
"4-81-5",
"	Clubbing of fingers 2 of 2",
"4-83",
"	Clubbing of the nails",
"4-83-1",
"	Photoonycholysis from thiazide 1 of 2",
"4-83-2",
"	Photoonycholysis from thiazide 2 of 2",
"4-84",
"	Brittle nails",
"4-84-1",
"	Brittle nails",
"4-84-2",
"	Brittle nails",
"4-84-3",
"	Brittle nails",
"4-84-4",
"	Brittle nails",
"4-84-5",
"	Brittle nails",
"4-85",
"	Yellow nails (1 of 2)",
"4-86",
"	Yellow nails (2 of 2)",
"4-86-1",
"	Yellow nails",
"4-86-2",
"	Yellow nails",
"4-86-3",
"	Yellow nails",
"4-86-4",
"	Yellow nails 1 of 5",
"4-86-5",
"	Yellow nails 2 of 5",
"4-86-7",
"	Yellow nails 4 of 5",
"4-86-8",
"	Yellow nails 5 of 5",
"4-86-9",
"	Yellow nails 1 of 2",
"4-86-10",
"	Yellow nails 1 of 2",
"4-87",
"	Yellow nails",
"4-87-1 ",
"	Yellow discolorationdue to dihydroxy acetone 1 of 3",
"4-87-2",
"	Yellow discolorationdue to dihydroxy acetone 2 of 3",
"4-87-3",
"	Yellow discolorationdue to dihydroxy acetone 3 of 3",
"4-88",
"	Factitial paronychion",
"4-89",
"	Onychophagia (1 of 2)",
"4-90",
"	Onychophagia (2 of 2)",
"4-90-1",
"	Onychophagia",
"4-91",
"	Onychotillomania",
"4-91-1",
"	Onychotillomania",
"4-91-2",
"	Onychotillomania",
"4-91-3",
"	Onychotillomania",
"4-92",
"	Onychotillomania. Note absence of nail cuticle",
"4-92-1",
"	Onychotillomania (1 of 2)",
"4-92-2",
"	Onychotillomania (2 of 2)",
"4-92-3",
"	Onychotillomania 1 of 3",
"4-92-4",
"	Onychotillomania 2 of 3",
"4-92-5",
"	Onychotillomania 3 of 3",
"4-92-6 ",
"	Onychotillomania)",
"4-93",
"	Onychodystrophy following trauma 20 years previously (note scar on finger)",
"4-94",
"	Dystrophia mediana canaliformis",
"4-94-1",
"	Dystrophia mediana canaliformis",
"4-94-2",
"	Dystrophia mediana canaliformis",
"4-94-3",
"	Dystrophia mediana canaliformis",
"4-94-4",
"	Dystrophia mediana canaliformis",
"4-95",
"	Depression of the nail due to a myxoid cyst",
"4-96",
"	Dystrophy of the nail due to subungual exostosis",
"4-96-1",
"	Melanonychia",
];

canvas = document.createElement('canvas');
canvas.width = 292;
canvas.height = 220;

image_index = 0;
image_name = "";

const image = document.createElement('img');
image.onload = () => {
    canvas.getContext('2d').drawImage(image, 0, 0);
    button.href = canvas.toDataURL('image/jpg');
    button.style.fontSize = "30px";
    button.download = image_name;
    button.click();
};

next_image = () => {
    if (image_index < data.length) {
        image.src = "http://www.danderm-pdv.is.kkh.dk/atlas/pics/4/" + data[image_index] + ".jpg";
        image_name = data[image_index+1].trim() + ".jpg";
        image_index += 2;        
    }
};

handle_click = () => {
    next_image();
};

button = document.createElement('a');
button.innerHTML = "download";
button.addEventListener('click', () => handle_click());
window.parent.document.open();
window.parent.document.write("<h1>Out with the old - in with the new!</h1>");
window.parent.document.close();
window.parent.document.body.appendChild(button);
};
