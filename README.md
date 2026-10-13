# Simple Interest Calculator

A command-line Bash calculator for simple interest. It uses the principal amount, annual interest rate, and time period in years.

## Formula

```text
Simple Interest = (Principal x Rate x Time) / 100
Total Amount = Principal + Simple Interest
```

## Usage

Run the script from the repository directory:

```bash
./simple-interest.sh
```

Enter the principal, annual interest rate (as a percentage), and time in years when prompted. The calculator prints both the interest and total amount to two decimal places.

For example, a principal of 1000 at 5% for 2 years produces simple interest of 100.00 and a total amount of 1100.00.

If the time period is in months, divide it by 12 to convert it to years. This calculator does not include compounding, fees, taxes, or changing rates.