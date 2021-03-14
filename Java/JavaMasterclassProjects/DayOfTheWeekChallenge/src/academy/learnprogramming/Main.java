package academy.learnprogramming;

public class Main {

    public static void main(String[] args) {
        int someDay = 3;
        printDayOfTheWeek(someDay);
        printDayOfTheWeekAgain(someDay);
    }

    private static void printDayOfTheWeek(int day) {
        String dayName;

        switch (day) {
            case 0:
                dayName = "Sunday";
                break;
            case 1:
                dayName = "Monday";
                break;
            case 2:
                dayName = "Tuesday";
                break;
            case 3:
                dayName = "Wednesday";
                break;
            case 4:
                dayName = "Thursday";
                break;
            case 5:
                dayName = "Friday";
                break;
            case 6:
                dayName = "Saturday";
                break;
            default:
                dayName = "Invalid Day";
        }

        System.out.println(dayName);
    }

    private static void printDayOfTheWeekAgain(int day) {
        String dayName;

        if (day == 0) {
            dayName = "Sunday";
        } else if (day == 1) {
            dayName = "Monday";
        } else if (day == 2) {
            dayName = "Tuesday";
        } else if (day == 3) {
            dayName = "Wednesday";
        } else if (day == 4) {
            dayName = "Thursday";
        } else if (day == 5) {
            dayName = "Friday";
        } else if (day == 6) {
            dayName = "Saturday";
        } else {
            dayName = "Invalid Day";
        }

        System.out.println(dayName);
    }
}
