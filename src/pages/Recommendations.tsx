
import React from 'react';
import MainLayout from '../layout/MainLayout';
import SectionHeader from '../components/SectionHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Star, StarHalf, StarOff } from 'lucide-react';

const Recommendations = () => {
  // Function to render the appropriate star rating
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={`full-${i}`} className="h-5 w-5 fill-amber-400 text-amber-400" />
      );
    }
    
    // Add half star if needed
    if (hasHalfStar) {
      stars.push(
        <StarHalf key="half" className="h-5 w-5 fill-amber-400 text-amber-400" />
      );
    }
    
    // Add empty stars
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <StarOff key={`empty-${i}`} className="h-5 w-5 text-gray-300" />
      );
    }
    
    return stars;
  };

  return (
    <MainLayout>
      <div className="min-h-[15vh] relative flex items-center justify-center bg-tech-700">
        <div className="absolute inset-0 bg-tech-600/80"></div>
        <div className="container mx-auto z-10 px-4 py-4">
          <h1 className="text-4xl font-bold text-white text-center">Recommendation Letters</h1>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Card className="border-none shadow-lg mb-12">
            <CardContent className="p-8">
              <div className="flex justify-center mb-4">
                <div className="flex space-x-1">
                  {renderStars(5)}
                </div>
              </div>
              <h2 className="text-2xl font-bold text-center mb-6">Yaniv Development Team Lead</h2>
              <div className="max-w-4xl mx-auto text-right" dir="rtl" lang="he">
                <p className="mb-4">
                  רציתי לשתף המלצה חמה על כפיר שוסטר, שעבד איתי כשנה. הוא מוביל אבטחה בצוות שלי, אבל לאחרונה הוא עזב על מנת להתמקד על הפיתוח אופרטיבי של תוכניתון.
                </p>
                <p className="mb-4">
                  כפיר הוא מפתח שאוהב לפתור בעיות - הוא לומד מהר, נגיש למשימה ויצירתי בחשיבה, ותומך אחרים אמיתי. הוא לא חושש להתמודד עם אתגרים חדשים, שמסייע רבות בהבנה מהירה של בעיות טכניות מורכבות.
                </p>
                <p className="mb-4">
                  כפיר גם ניחן ביחסי האנוש טובים, בייחוד ביכולת התקשורת והעבודה המשותפת עם אנשים אחרים שונים בחברה. תמיד היה נעים לעבוד איתו, והוא גם לאדוורד מקצועית ותפתח בהבאת.
                </p>
                <p>
                  אני ממליץ עליו בלב שלם, בטוח שהוא יתרום לכם כפי שתרם אצלי, ואשמח לתת לו המלצה רבה במקשר.
                </p>
              </div>
            </CardContent>
          </Card>

          <Separator className="my-12 max-w-2xl mx-auto" />

          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <div className="flex justify-center mb-4">
                <div className="flex space-x-1">
                  {renderStars(4.5)}
                </div>
              </div>
              <h2 className="text-2xl font-bold text-center mb-6">Aviv Development Team Lead</h2>
              <div className="max-w-4xl mx-auto text-right" dir="rtl" lang="he">
                <p className="mb-4">
                  אני שמחתי להמליץ על כפיר שוסטר, שעבד לצידי במשך חולפה משמעותית. בתחילת דרכו בחברה הוא עסק בבדיקת תוכנה, ובהמשך עבר לתפקיד פיתוח, בו שימש כפיתח אוטומציה באופן יעיל במיוחד.
                </p>
                <p className="mb-4">
                  כפיר היראה לאורך כל הדרך מחויבות גבוהה, סקרנות מקצועית ונכונות לתפתרון בעיות. הוא נגש למשימות בצורה מדוקדקת, עם הבנה מעמיקה של הדרישות העסקיות, ותמיד עמד בזמנים שהוגדרו על מימוש פעולות עם חברי הצוות.
                </p>
                <p className="mb-4">
                  הוא מביא איתו אנרגיה חיובית, תקשורתיות ומוכנות לייעור - מה שתורם לא רק להצלחה המקצועית, אלא גם לדינמיקה החיובית איתו תמיד הייתה נעימה.
                </p>
                <p>
                  אני בטוח שכפיר יהיה חיזוק משמעותי בכל מסגרת פיתוח, וממליץ עליו בחום!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </MainLayout>
  );
};

export default Recommendations;
