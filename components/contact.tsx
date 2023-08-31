import { FC } from 'react';

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from './ui/textarea';
interface ContactProps { }
const Contact: FC<ContactProps> = () => {
    return (
        <div className='p-4 w-full my-10 mt-15' id='contact'>
            <div className="my-10 w-full md:mx-auto" id='contact'>
                <h1 className="
        text-4xl
        text-center
        font-bold
        text-gray-900
        dark:text-gray-100
        mb-4
      ">Take a coffee & chat with me</h1>
                {/* skills description */}
                <p className="
        text-2xl
        text-center
        text-gray-900
        dark:text-gray-100
        px-4  mx-auto
        py-2 md:max-w-[95%]
        lg:max-w-[60%]
      ">If you have any questions or just want to say hi,
                    feel free to drop me a message.
                </p>
            </div>
            <Card className="rounded-2xl
            md:max-w-[600px]
        shadow-xl
        dark:border-gray-100/10
        border-gray-900/10
        w-full mx-auto">
                <CardHeader>
                    <CardTitle>Contact</CardTitle>
                    <CardDescription>
                        Please fill in the form below to send me an email.

                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" placeholder="Your Name" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="Email">Email</Label>
                                <Input id="Email" placeholder="Your Email" />
                            </div>
                            <div className="grid w-full gap-1.5">
                                <Label htmlFor="message">Message</Label>
                                <Textarea placeholder="Type your message here." id="message" style={
                                    {
                                        height: '10rem'
                                    }
                                } />
                            </div>

                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-center">
                    <Button>Send Message</Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default Contact;