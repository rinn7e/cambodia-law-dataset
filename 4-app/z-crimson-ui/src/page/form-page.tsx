import { useState, type ReactNode } from 'react'
import { pipe } from 'fp-ts/function'
import * as O from 'fp-ts/Option'
import { Input, Select, Textarea, Checkbox, Radio, Fieldset, Label, Button, defaultButton, Showcase, Code } from '@/component'

const FormElements = (): ReactNode => {
  const [rangeVal, setRangeVal] = useState(50)
  const [colorVal, setColorVal] = useState('#0969da')
  const countries = ['United States', 'Canada', 'United Kingdom', 'Australia', 'Germany']

  return (
    <div className="space-y-[24px]">
      <Showcase title="Text Inputs" description="Various text-based input types.">
        <div className="grid grid-cols-1 gap-[16px] md:grid-cols-2">
          {[
            { type: 'text', ph: 'Enter text...', label: 'Text' },
            { type: 'email', ph: 'email@example.com', label: 'Email' },
            { type: 'password', ph: 'Password...', label: 'Password' },
            { type: 'search', ph: 'Search...', label: 'Search' },
          ].map(({ type, ph, label }) => (
            <div key={type}>
              <Label>{label}</Label>
              <Input type={type} placeholder={ph} />
            </div>
          ))}
        </div>
      </Showcase>

      <Showcase title="Date & Number Inputs" description="Numeric and temporal inputs.">
        <div className="grid grid-cols-2 gap-[16px] md:grid-cols-3">
          <div>
            <Label>Number</Label>
            <Input type="number" />
          </div>
          <div>
            <Label>Date</Label>
            <Input type="date" />
          </div>
          <div>
            <Label>Time</Label>
            <Input type="time" />
          </div>
          <div>
            <Label>DateTime</Label>
            <Input type="datetime-local" />
          </div>
          <div>
            <Label>Month</Label>
            <Input type="month" />
          </div>
          <div>
            <Label>Week</Label>
            <Input type="week" />
          </div>
        </div>
      </Showcase>

      <Showcase title="Range & Color" description="Specialized input types.">
        <div className="grid grid-cols-1 gap-[24px] md:grid-cols-2">
          <div>
            <Label>Range: {rangeVal}</Label>
            <Input
              type="range"
              min="0"
              max="100"
              value={rangeVal}
              onChange={(e) => setRangeVal(+e.target.value)}
              className="w-full accent-[var(--color-accent-emphasis)]"
            />
          </div>
          <div>
            <Label>Color: {colorVal}</Label>
            <div className="flex items-center gap-[12px]">
              <Input
                type="color"
                value={colorVal}
                onChange={(e) => setColorVal(e.target.value)}
                className="h-10 w-12 cursor-pointer p-1"
              />
              <Code>{colorVal}</Code>
            </div>
          </div>
        </div>
      </Showcase>

      <Showcase title="File Input" description="File upload input.">
        <Input
          type="file"
          className="block w-full text-sm file:mr-[16px] file:cursor-pointer file:rounded-md file:border-0 file:bg-[var(--color-accent-subtle)] file:px-[16px] file:py-[8px] file:text-[var(--color-accent-fg)]"
        />
      </Showcase>

      <Showcase title="Checkbox & Radio" description="Selection inputs.">
        <div className="grid grid-cols-1 gap-[24px] md:grid-cols-2">
          <div>
            <Label className="mb-[12px]">Checkboxes</Label>
            {['TypeScript', 'React', 'Tailwind'].map((t, i) => (
              <Label key={t} className="mb-[4px] flex cursor-pointer items-center gap-[8px] font-normal">
                <Checkbox defaultChecked={i < 2} />
                {t}
              </Label>
            ))}
          </div>
          <div>
            <Label className="mb-[12px]">Radio Buttons</Label>
            {['Light', 'Dark', 'System'].map((t, i) => (
              <Label key={t} className="mb-[4px] flex cursor-pointer items-center gap-[8px] font-normal">
                <Radio
                  name="theme"
                  defaultChecked={i === 2}
                />
                {t}
              </Label>
            ))}
          </div>
        </div>
      </Showcase>

      <Showcase title="Select & Datalist" description="Dropdown selections.">
        <div className="grid grid-cols-1 gap-[16px] md:grid-cols-2">
          <div>
            <Label>Select</Label>
            <Select>
              <option value="">Choose...</option>
              {countries.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </Select>
          </div>
          <div>
            <Label>With Datalist</Label>
            <Input type="text" list="countries" placeholder="Type..." />
            <datalist id="countries">
              {countries.map((c) => (
                <option key={c} value={c} />
              ))}
            </datalist>
          </div>
        </div>
      </Showcase>

      <Showcase title="Textarea" description="Multi-line text input.">
        <Textarea rows={4} placeholder="Enter message..." />
      </Showcase>

      <Showcase title="Buttons" description="Various button types and styles.">
        <div className="flex flex-wrap gap-[12px]">
          <Button
            config={{
              ...defaultButton(),
              buttonStyle: 'primary',
              label: 'Primary',
            }}
          />
          <Button
            config={{
              ...defaultButton(),
              buttonStyle: 'success',
              label: 'Success',
            }}
          />
          <Button
            config={{
              ...defaultButton(),
              buttonStyle: 'danger',
              label: 'Danger',
            }}
          />
          <Button
            config={{
              ...defaultButton(),
              buttonStyle: 'outline',
              label: 'Outline',
            }}
          />
          <Button
            config={{
              ...defaultButton(),
              buttonStyle: 'primary',
              label: 'Disabled',
              state: { _tag: 'Disabled' },
            }}
          />
        </div>
      </Showcase>

      <Showcase title="Fieldset & Legend" description="Grouping form elements.">
        <Fieldset legend="Personal Info">
          <div className="grid grid-cols-2 gap-[16px]">
            <Input type="text" placeholder="First name" />
            <Input type="text" placeholder="Last name" />
          </div>
        </Fieldset>
      </Showcase>

      <Showcase title="Output" description="Represents calculation results.">
        <div className="flex items-center gap-[12px]">
          <span className="text-[var(--color-fg-default)]">5 + 3 =</span>
          <output className="rounded bg-[var(--color-success-subtle)] px-[16px] py-[8px] font-semibold text-[var(--color-success-fg)]">
            {pipe(
              O.some({ a: 5, b: 3 }),
              O.map(({ a, b }) => a + b),
              O.getOrElse(() => 0)
            )}
          </output>
        </div>
      </Showcase>
    </div>
  )
}

export { FormElements }
