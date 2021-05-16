export interface HomePageModel {
    backgroundImageDesktop: string;
    backgroundImageMobile: string;
    buttonTextColor: string;
    buttonBackgroundColor: string;
    buttonBorder: string;
    buttonText: string;
    centerText: string;
    buttonOnClickFunction: any;
}

export interface HomePageProps {
    homePageModel: HomePageModel
}