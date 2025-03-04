console.log("Yo are Winner!!!");

const land = prompt("Хочеш запустить программу \"ЛАНДШАФТ\"", "");
if (land == "Да", land == "да") {

    var landscape = function () {

        var result = "";
        var flat = function (size) {
            for (var count = 0; count < size; count++)
                result = (result + "_")

        };

        var mountain = function (size) {
            result = (result + "/")
            for (var count = 0; count < size; count++)
                result = (result + "`")
            result = (result + "\\")


        };

        flat(9);
        mountain(4);
        flat(6);
        mountain(1);
        flat(1);
        return result;

    };
    console.log(landscape());
};
