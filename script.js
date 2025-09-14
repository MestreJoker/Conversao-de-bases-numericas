let decimalText = document.getElementById("decimalText")
        let binText = document.getElementById('binText')
        let octText = document.getElementById('octText')
        let hexaText = document.getElementById('hexaText')

        decimalText.addEventListener('input', () => {
            if (event.key === '.' || event.key === ',') {
                decimalText.value = input.value.slice(0, -1);
            }
            let valorDecimal = decimalText.value

            converterBinario(valorDecimal)
            converterOctal(valorDecimal)
            converterHexadecimal(valorDecimal)
        });

        function converterBinario(decimal) {
            let binario = ""
            let sinal = ""
            if (decimal < 0) {
                sinal = "-"
                decimal = decimal * (-1)
            }
            if (decimal == 0) {
                binText.value = 0
            }
            else {
                while (decimal > 0) {
                    binario = String(decimal % 2) + binario
                    decimal = Math.trunc(decimal / 2)
                }
                binText.value = parseInt(sinal + binario)
            }
        }

        function converterOctal(decimal) {
            let octal = ""
            let sinal = ""
            if (decimal < 0) {
                sinal = "-"
                decimal = decimal * (-1)
            }
            if (decimal == 0) {
                octText.value = 0
            }
            else {
                while (decimal > 0) {
                    octal = String(decimal % 8) + octal
                    decimal = Math.trunc(decimal / 8)
                }
                octText.value = parseInt(sinal + octal)
            }
        }

        function converterHexadecimal(decimal) {
            let hexadecimal = ""

            while (decimal > 0) {
                if (decimal % 16 == 10) {
                    hexadecimal = "A" + hexadecimal
                }
                else if (decimal % 16 == 11) {
                    hexadecimal = "B" + hexadecimal
                }
                else if (decimal % 16 == 12) {
                    hexadecimal = "C" + hexadecimal
                }
                else if (decimal % 16 == 13) {
                    hexadecimal = "D" + hexadecimal
                }
                else if (decimal % 16 == 14) {
                    hexadecimal = "E" + hexadecimal
                }
                else if (decimal % 16 == 15) {
                    hexadecimal = "F" + hexadecimal
                }
                else {
                    hexadecimal = String(decimal % 16) + hexadecimal
                }
                decimal = Math.trunc(decimal / 16)
            }
            hexaText.value = hexadecimal
        }