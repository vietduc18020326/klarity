"use client";

import { UIButton } from "@/components";
import {
  ArrowCircleRightIcon,
  EnvelopeSimpleIcon,
  FacebookLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
  MapPinIcon,
  PhoneIcon,
  YoutubeLogoIcon,
} from "@phosphor-icons/react";
import Link from "next/link";
import { memo } from "react";

export const Footer = memo(function Footer() {
  return (
    <footer className="w-full py-3xl px-l bg-brand-900 flex items-center justify-center">
      <div className="w-content flex flex-col gap-3xl">
        <div className="flex flex-row rounded-3 bg-brand-600 pt-m pb-m pr-m pl-l items-center justify-between">
          <h2 className="text-white h3-6">Have You got Klarity Live?</h2>

          <UIButton
            size="L"
            color="bg-white"
            title="Read more here"
            RightComp={
              <ArrowCircleRightIcon
                weight="fill"
                className="text-brand-500 w-l h-l"
              />
            }
          />
        </div>

        <div className="w-full flex flex-row gap-3xl items-start">
          <div className="flex flex-col items-start gap-m flex-1">
            <h3 className="text-white h3-7">Klarity Live</h3>

            <p className="b3-4 text-white">
              Data dashboards, real-time performance insights and streamlined
              reporting for sustainable buildings, portfolios and funds.
            </p>

            <ListSocialsLinks />
          </div>

          <div className="grid grid-cols-2 flex-1">
            <div className="flex flex-col gap-m">
              <p className="text-white b3-6">Website</p>

              <ul className="flex flex-col gap-s w-full">
                <Link href="#" className="b3-4 text-secondary-25">
                  Why us
                </Link>
                <Link href="#" className="b3-4 text-secondary-25">
                  Our service
                </Link>
                <Link href="#" className="b3-4 text-secondary-25">
                  About us
                </Link>
                <Link href="#" className="b3-4 text-secondary-25">
                  Contact
                </Link>
              </ul>
            </div>

            <div className="flex flex-col gap-m">
              <p className="text-white b3-6">Contact</p>

              <ul className="flex flex-col gap-s w-full">
                <Link href="#" className="flex flex-row gap-m items-center">
                  <EnvelopeSimpleIcon className="text-secondary-25 w-l h-l" />
                  <p className="!b3-4 text-white flex-1">contact@klarity.com</p>
                </Link>
                <Link href="#" className="flex flex-row gap-m items-center">
                  <MapPinIcon className="text-secondary-25 w-l h-l" />
                  <p className="b3-4 text-white flex-1">
                    123 Eco Lane, Green City, GA 30301
                  </p>
                </Link>
                <Link href="#" className="flex flex-row gap-m items-center">
                  <PhoneIcon className="text-secondary-25 w-l h-l" />
                  <p className="b3-4 text-white flex-1">(555) 123-4567</p>
                </Link>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full h-[1px] bg-secondary-200" />

        <div className="flex flex-row w-full justify-between items-center pt-6">
          <p className="b3-4 text-white">
            © 2025 KangaSys. All rights reverved
          </p>

          <div className="flex flex-row gap-4 items-center">
            <Link href="#" className="b3-6 text-white">
              Privacy Policy
            </Link>

            <Link href="#" className="b3-6 text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
});

const ListSocialsLinks = memo(function ListSocialsLinks() {
  return (
    <div className="flex flex-row gap-m">
      <YoutubeLogoIcon className="text-white w-2xl h-2xl" weight="fill" />

      <LinkedinLogoIcon className="text-white w-2xl h-2xl" weight="fill" />

      <FacebookLogoIcon className="text-white w-2xl h-2xl" weight="fill" />

      <InstagramLogoIcon className="text-white w-2xl h-2xl" weight="fill" />
    </div>
  );
});
